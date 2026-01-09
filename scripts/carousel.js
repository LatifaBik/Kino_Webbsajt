import { renderMovieList } from "./createcard.js";

export async function movieCarousel(movies) {
    const heroInner = document.getElementById("heroInner");
    const prevBtn = document.querySelector('.carousel_control.prev');
    const nextBtn = document.querySelector('.carousel_control.next');

    // Movie Carousel slider
    if (heroInner && movies.length > 0) {
        const heroMovies = [...movies].sort(() => Math.random() - 0.5).slice(0, 6);
        heroInner.innerHTML = heroMovies.map((movie, index) => `
                <div class="carousel_slide ${index === 0 ? 'active' : ''}" style="background-image: url('${movie.Poster_Link}')">
                    <div class="slide_content">
                        <h1 class="film_title">${movie.Series_Title}</h1>
                    </div>
                </div>`).join('');

        const slides = heroInner.querySelectorAll('.carousel_slide');
        let currentSlide = 0;
        const showSlide = (i) => {
            slides[currentSlide].classList.remove('active');
            currentSlide = (i + slides.length) % slides.length;
            slides[currentSlide].classList.add('active');
        };
        if (prevBtn && nextBtn) {
            prevBtn.onclick = () => showSlide(currentSlide - 1);
            nextBtn.onclick = () => showSlide(currentSlide + 1);
        }
    }

    // Slide Button
    const setupTrackNavigation = () => {
        const carousels = document.querySelectorAll('.movies-carousel');
        carousels.forEach(container => {
            const track = container.querySelector('.movies-carousel__track');
            const pBtn = container.querySelector('.prev_btn');
            const nBtn = container.querySelector('.next_btn');

            if (track && pBtn && nBtn) {
                nBtn.onclick = () => track.scrollBy({ left: 350, behavior: 'smooth' });
                pBtn.onclick = () => track.scrollBy({ left: -350, behavior: 'smooth' });
            }
        });
    };

    const daySelector = document.getElementById('dayFilter'); 
    const currentTrack = document.getElementById('currentMoviesTrack');
    const dailyMovieCache = {};

    const updateCurrentMovies = (filterDay) => {
        if (!dailyMovieCache[filterDay]) {
            dailyMovieCache[filterDay] = [...movies].sort(() => Math.random() - 0.5).slice(0, 10);
        }
        if (currentTrack) {
            renderMovieList(currentTrack, dailyMovieCache[filterDay], "current"); 
            setupTrackNavigation(); // RE-BIND buttons after rendering new movies
        }
    };

    if (daySelector) {
        daySelector.addEventListener('click', (e) => {
            const btn = e.target.closest('.day-btn');
            if (!btn) return;
            document.querySelectorAll('.day-btn').forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            updateCurrentMovies(btn.dataset.day);
        });
    }

    updateCurrentMovies("Idag");
    setupTrackNavigation();
}

// Detail Toggle
document.addEventListener('click', (e) => {
    const btn = e.target.closest('.details-btn');
    if (!btn) return;

    const movieId = btn.getAttribute('data-id');
    const prefix = btn.getAttribute('data-prefix');
    const detailsDiv = document.getElementById(`${prefix}-details-${movieId}`);

    if (detailsDiv) {
        const isHidden = window.getComputedStyle(detailsDiv).display === 'none';
        detailsDiv.style.display = isHidden ? 'block' : 'none';
        btn.innerHTML = isHidden ? 'Detaljer ▲' : 'Detaljer ▼';
    }
});