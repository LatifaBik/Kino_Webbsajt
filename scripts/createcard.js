export function createMovieCard(movie) {
  const card = document.createElement("article");
  card.classList.add("movies-carousel__card");
  card.dataset.id = movie.id;

  const img = document.createElement("img");
  img.classList.add("movies-carousel__poster");
  img.src = movie.Poster_Link;
  img.alt = `${movie.Series_Title} poster`;

  const title = document.createElement("h3");
  title.classList.add("movies-carousel__title");
  title.textContent = movie.Series_Title;

  const actions = document.createElement("div");
  actions.classList.add("movies-carousel__actions");

  const trailerBtn = document.createElement("button");
  trailerBtn.classList.add("movies-carousel__button");
  trailerBtn.type = "button";
  trailerBtn.textContent = "Trailer";
  trailerBtn.dataset.id = movie.id;

  const detailsBtn = document.createElement("button");
  detailsBtn.classList.add("movies-carousel__button");
  detailsBtn.type = "button";
  detailsBtn.textContent = "Detaljer";
  detailsBtn.dataset.id = movie.id;

  actions.append(trailerBtn, detailsBtn);
  card.append(img, title, actions);
  return card;
}

export function renderMovieList(trackEl, list) {
  if (!trackEl) return;

  trackEl.innerHTML = "";

  if (!list?.length) {
    trackEl.innerHTML = `<p class="movies-carousel__empty">Inget att visa.</p>`;
    return;
  }

  list.forEach((movie) => {
    trackEl.appendChild(createMovieCard(movie));
  });
}