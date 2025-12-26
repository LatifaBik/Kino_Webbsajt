import "./styles/main.scss";
import { fetchMovies } from "../scripts/api.js";
import { renderMovieList } from "../scripts/createcard.js";

function parseDate(dateStr) {
  if (!dateStr) return null;
  const d = new Date(dateStr);
  return Number.isNaN(d.getTime()) ? null : d;
}

function isUpcoming(movie) {
  const d = parseDate(movie.Show_Date);
  if (!d) return false;
  const today = new Date();
  today.setHours(0, 0, 0, 0);
  return d > today;
}

document.addEventListener("DOMContentLoaded", async () => {
  const currentTrack = document.getElementById("currentMoviesTrack");
  const comingSoonTrack = document.getElementById("comingSoonTrack");
  const eventsTrack = document.getElementById("eventsTrack");

  // loading text
  if (currentTrack) currentTrack.innerHTML = "<p>Laddar…</p>";
  if (comingSoonTrack) comingSoonTrack.innerHTML = "<p>Laddar…</p>";
  if (eventsTrack) eventsTrack.innerHTML = "<p>Laddar…</p>";

  try {
    const movies = await fetchMovies();
    const upcoming = movies.filter(isUpcoming);
    const current = movies.filter((m) => !isUpcoming(m));

     // only shows 10 cards on landingpage, otherwise it will load almost infinite titles with our API
    renderMovieList(currentTrack, current.slice(0, 10));
    renderMovieList(comingSoonTrack, upcoming.slice(0, 10));
    renderMovieList(eventsTrack, current.slice(0, 10)); // placeholder until we get API to show upcoming events, can change current to events

  } catch (err) {
    console.error(err);
    const msg = `<p class="empty_state">Kunde inte hämta filmer: ${err.message}</p>`;
    if (currentTrack) currentTrack.innerHTML = msg;
    if (comingSoonTrack) comingSoonTrack.innerHTML = msg;
    if (eventsTrack) comingSoonTrack.innerHTML = msg;
  }
});