import { fetchMovies } from "./api.js";
import { renderMovieList } from "./createcard.js";
import { openTrailer } from "./trailermodal.js";
import { toggleTheme, closeBanner } from "./tema.js";
import "../sections/main.scss";
import { toggleLogin } from "./login.js";
import { toggleRegister } from "./register.js";
import { toggleMenu } from "./menu.js";
import { closeNotice } from "./notice.js";

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

function setLoading(trackEl) {
  if (trackEl) trackEl.innerHTML = "<p>Laddar…</p>";
}

function setError(trackEl, err) {
  if (trackEl) {
    trackEl.innerHTML = `<p class="empty_state">Kunde inte hämta filmer: ${err?.message ?? err}</p>`;
  }
}

document.addEventListener("DOMContentLoaded", async () => {
  // Init UI
  try {
    toggleLogin();
    toggleRegister();
    toggleMenu();
    closeNotice();
    toggleTheme();
    closeBanner();
  } catch (e) {
    console.warn("UI init warning:", e);
  }


  const currentTrack = document.getElementById("currentMoviesTrack");
  const comingSoonTrack = document.getElementById("comingSoonTrack");
  const eventsTrack = document.getElementById("eventsTrack");

  setLoading(currentTrack);
  setLoading(comingSoonTrack);
  setLoading(eventsTrack);

  let movies = [];

  try {
    movies = await fetchMovies();

    const upcoming = movies.filter(isUpcoming);
    const current = movies.filter((m) => !isUpcoming(m));

    renderMovieList(currentTrack, current.slice(0, 10));
    renderMovieList(comingSoonTrack, upcoming.slice(0, 10));
    renderMovieList(eventsTrack, current.slice(0, 10)); // placeholder
  } catch (err) {
    console.error(err);
    setError(currentTrack, err);
    setError(comingSoonTrack, err);
    setError(eventsTrack, err);
    return;
  }

  document.body.addEventListener("click", (e) => {
    const btn = e.target.closest(".movies-carousel__button");
    if (!btn) return;

    if (btn.textContent?.trim() !== "Trailer") return;

    const movieId = Number(btn.dataset.id);
    const movie = movies.find((m) => Number(m.id) === movieId);

    if (!movie?.Trailer_Id) {
      alert("Trailer saknas");
      return;
    }

    openTrailer(movie.Trailer_Id);
  });
});
