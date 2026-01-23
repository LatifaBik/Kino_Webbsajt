import { fetchMovies } from "./api.js";

export async function movieCarousel(movies) {
    // 1. Define heroInner inside the function
    const heroInner = document.getElementById("heroInner");
    
    // 2. Locate buttons outside the inner container
    const prevBtn = document.querySelector('.carousel_control.prev');
    const nextBtn = document.querySelector('.carousel_control.next');

    const getAgeCategory = (certificate) => {
        if (!certificate) return { category: null, class: null };
        const cert = certificate.toString().toUpperCase();
        if (cert === 'A' || cert === 'R') {
            return { category: 'Adult', class: 'adults-only' };
        } else if (cert === 'U' || cert === 'UA' || cert === 'PG-13') {
            return { category: 'Children', class: 'for-children' };
        } else {
            return { category: certificate, class: 'other-rating' };
        }
    };

    if (heroInner && movies.length > 0) {
        const heroMovies = [...movies].sort(() => Math.random() - 0.5).slice(0, 6);
        
        // Injecting images into the container
        heroInner.innerHTML = heroMovies.map((movie, index) => {
            const { category, class: categoryClass } = getAgeCategory(movie.Certificate);

            return `
                <div class="carousel_slide ${index === 0 ? 'active' : ''}" style="background-image: url('${movie.Poster_Link}')">
                    <div class="slide_content">
                        <h1 class="film_title">${movie.Series_Title}</h1>
                        <div class="festival_dates">
                            <h2>Released: ${movie.Released_Year}</h2>
                            <h3>${category ? `<span class="certificate-badge ${categoryClass}">${category}</span>` : ''}</h3><br>
                        </div>
                    </div>
                </div>`;
        }).join('');

        const slides = heroInner.querySelectorAll('.carousel_slide');
        let currentSlide = 0;

        function showSlide(index) {
            if (slides.length === 0) return;
            slides[currentSlide].classList.remove('active');
            currentSlide = (index + slides.length) % slides.length;
            slides[currentSlide].classList.add('active');
        }

        // Use onclick or ensure listeners aren't added multiple times
        if (prevBtn && nextBtn) {
            prevBtn.onclick = () => showSlide(currentSlide - 1);
            nextBtn.onclick = () => showSlide(currentSlide + 1);
        }

        // Auto-play
        setInterval(() => showSlide(currentSlide + 1), 5000);
    }
}


