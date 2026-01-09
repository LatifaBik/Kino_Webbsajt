import "./sections/main.scss";

import { initMemberPage } from '../scripts/member-page.js';

if (document.querySelector('.members__offers')) {
  initMemberPage();
}
import {initMemberButtons} from '../scripts/member-page.js';
initMemberButtons();


import { toggleLogin } from '../scripts/login.js';
toggleLogin();
import { toggleRegister } from '../scripts/register.js';
toggleRegister();
import { toggleMenu } from '../scripts/menu.js'; 
toggleMenu(); 
import { closeNotice } from '../scripts/notice.js';
closeNotice();
import { toggleTheme } from '../scripts/tema.js';
toggleTheme();

import { fetchMovies } from "../scripts/api.js";
import { renderMovieList } from "../scripts/createcard.js";
import { openTrailer } from "../scripts/trailermodal.js"; 
import { movieCarousel } from "../scripts/carousel.js"; 



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

    movieCarousel(movies);
    const upcoming = movies.filter(isUpcoming);
    const current = movies.filter((m) => !isUpcoming(m));

    // only shows 10 cards on landingpage, otherwise it will load almost infinite titles with our API

    renderMovieList(currentTrack, current.slice(0, 20));
    renderMovieList(comingSoonTrack, upcoming.slice(0, 10));
    renderMovieList(eventsTrack, current.slice(0, 10)); // placeholder until we get API to show upcoming events, can change current to events

    //  Click handling for the Trailer button
    document.body.addEventListener("click", (e) => {
      const btn = e.target.closest(".movies-carousel__button");
      if (!btn) return;

      if (btn.textContent === "Trailer") {
        const movieId = Number(btn.dataset.id);

        const movie = movies.find(m => m.id === movieId);

        if (!movie?.Trailer_Id) {
          alert("Trailer saknas");
          return;
        }

        openTrailer(movie.Trailer_Id);
      }
    });

  } catch (err) {
    console.error(err);
    const msg = `<p class="empty_state">Kunde inte hämta filmer: ${err.message}</p>`;
    if (currentTrack) currentTrack.innerHTML = msg;
    if (comingSoonTrack) comingSoonTrack.innerHTML = msg;
  }
});
