export async function movieCarousel() {
    const currentTrack = document.getElementById('currentMoviesTrack');
    const upcomingTrack = document.getElementById('comingSoonTrack');
    const eventsTrack = document.getElementById('eventsTrack');
    const heroInner = document.querySelector('.carousel_inner');
    const indicatorsContainer = document.querySelector('.carousel_indicators');

    try {
        const response = await fetch('./mockup_Data/movies.json');
        if (!response.ok) throw new Error('Failed to fetch movies.json');
        const movieData = await response.json();

        // CAROUSEL
        if (heroInner) {
            const heroMovies = [...movieData].sort(() => Math.random() - 0.5).slice(0, 6);
            heroInner.innerHTML = heroMovies.map((movie, index) => `
                <div class="carousel_slide ${index === 0 ? 'active' : ''}" style="background-image: url('${movie.Poster_Link}')">
                    <div class="slide_content">
                        <h1 class="film_title">${movie.Series_Title}</h1>
                        <div class="festival_dates"><h2>Released: ${movie.Released_Year}</h2></div>
                    </div>
                </div>`).join('');

            // dynamically create indicators for the 6 slides
            if (indicatorsContainer) {
                indicatorsContainer.innerHTML = heroMovies.map((_, i) => `
                    <div class="indicator ${i === 0 ? 'active' : ''}" data_slide="${i}"></div>
                `).join('');
            }
        }

       const generateMovieHTML = (data, showDays, prefix) => {
    // Can be change later to dates
    const days = ["Idag", "Imorgon", "Fredag 19/12", "Lördag 20/12", "Söndag 21/12"];

    return data.map((movie, index) => `
        <div class="movie-wrapper">
            ${showDays ? `<h3 class="movie-day-label">${days[index] || ''}</h3>` : ''}
            
            <div class="movie-card">
                <img src="${movie.Poster_Link}" alt="${movie.Series_Title}">
                <div class="card-footer">
                    <span><i class="fas fa-play"></i> Trailer</span>
                    <span class="details-btn" data-prefix="${prefix}" data-id="${movie.id}">Detaljer ▼</span>
                </div>
                
                <div class="movie-details-content" id="${prefix}-details-${movie.id}" style="display: none;">
                    <p><strong>Rating:</strong> ⭐ ${movie.IMDB_Rating}</p>
                    <p><strong>Year:</strong> ${movie.Released_Year}</p>
                    <p><strong>Regissör:</strong> ${movie.Director}</p>
                    <p><strong>Handling:</strong> ${movie.Overview}</p>
                </div>
            </div>
        </div>`).join('');
};

        const shuffledCurrent = [...movieData].sort(() => Math.random() - 0.5).slice(0, 5);
        const shuffledUpcoming = [...movieData].sort(() => Math.random() - 0.5).slice(0, 5);

        if (currentTrack) currentTrack.innerHTML = generateMovieHTML(shuffledCurrent, true, 'current');
        if (upcomingTrack) upcomingTrack.innerHTML = generateMovieHTML(shuffledUpcoming, false, 'upcoming');

        if (eventsTrack) {
            const shuffledEvents = [...movieData].sort(() => Math.random() - 0.5).slice(0, 5);
            eventsTrack.innerHTML = shuffledEvents.map(movie => `
                <div class="event_card">
                    <img src="${movie.Poster_Link}" alt="${movie.Series_Title}">
                </div>`).join('');
        }
        setupDetailsListeners();

    } catch (error) {
        console.error("Movie Carousel Error:", error);
    }
}

function setupDetailsListeners() {
    // use document-level delegation so it works even if content reloads
    document.removeEventListener('click', handleDetailClick); // Prevent double listeners
    document.addEventListener('click', handleDetailClick);
}

function handleDetailClick(e) {
    if (e.target.classList.contains('details-btn')) {
        const movieId = e.target.getAttribute('data-id');
        const prefix = e.target.getAttribute('data-prefix');
        const detailsDiv = document.getElementById(`${prefix}-details-${movieId}`);

        if (detailsDiv) {
            const isHidden = detailsDiv.style.display === 'none';
            detailsDiv.style.display = isHidden ? 'block' : 'none';
            e.target.innerHTML = isHidden ? 'Detaljer ▲' : 'Detaljer ▼';
        }
    }
}