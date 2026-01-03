const modal = document.getElementById("trailerModal");
const iframe = document.getElementById("trailerIframe");
const closeBtn = modal.querySelector(".trailer-modal__close");
const backdrop = modal.querySelector(".trailer-modal__backdrop");

export function openTrailer(trailerId) {
  iframe.src = `https://www.youtube.com/embed/${trailerId}?autoplay=1`;
  modal.classList.remove("hidden");
}

export function closeTrailer() {
  iframe.src = "";
  modal.classList.add("hidden");
}

closeBtn.addEventListener("click", closeTrailer);
backdrop.addEventListener("click", closeTrailer);
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") closeTrailer();
});
