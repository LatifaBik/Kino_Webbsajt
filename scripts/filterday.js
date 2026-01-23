export async function filterDay(){
    const daySelector = document.getElementById('dayFilter'); 
    const currentTrack = document.getElementById('currentMoviesTrack');
    // Cache to store movies for each day
    const dailyMovieCache = {};
    try{
        const updateCurrentMovies = (filterDay) => {
                // Check if we already have movies saved for this specific day
                if (!dailyMovieCache[filterDay]) {
                    // If not, create a random selection and save it in the cache
                    dailyMovieCache[filterDay] = [...movieData].sort(() => Math.random() - 0.5).slice(0, 5);
                }

                // Use the movies stored in the cache for this day
                const filtered = dailyMovieCache[filterDay];
                
                if (currentTrack) {
                    currentTrack.innerHTML = generateMovieHTML(filtered, true, 'current');
                    setupDetailsListeners(); 
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

            const shuffledUpcoming = [...movieData].sort(() => Math.random() - 0.5).slice(5, 10);
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
    document.removeEventListener('click', handleDetailClick);
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