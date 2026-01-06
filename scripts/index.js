import '../main.scss';
import { toggleMenu } from './menu.js';
import { toggleTheme, closeBanner } from './tema.js';
import { movieCarousel } from './carousel.js';
import { scrollRow, changeHeroSlide } from './movieEventSlider.js';
import { toggleLogin } from './login.js';
import { toggleRegister } from './register.js';
import { openTrailer } from './trailermodal.js'; 

document.addEventListener('DOMContentLoaded', async () => {
    toggleLogin();
    toggleRegister();
    toggleMenu();
    closeBanner();
    toggleTheme();

    // Trailer Listener
    document.addEventListener('click', (e) => {
        const trailerBtn = e.target.closest('.trailer-btn');
    if (trailerBtn) {
        const trailerUrl = trailerBtn.getAttribute('data-trailer');
        
        if (trailerUrl) {
            let videoId = '';
            
            // Robust extraction for various YouTube URL formats
            if (trailerUrl.includes('v=')) {
                videoId = trailerUrl.split('v=')[1].split('&')[0];
            } else if (trailerUrl.includes('youtu.be/')) {
                videoId = trailerUrl.split('youtu.be/')[1].split('?')[0];
            }

            if (videoId) {
                openTrailer(videoId);
            } else {
                console.error("Could not parse Video ID from URL:", trailerUrl);
            }
        }
    }git
    }, { passive: true });

    try {
        await movieCarousel();
        changeHeroSlide(0);
        
        const heroPrev = document.querySelector('.carousel_control.prev');
        const heroNext = document.querySelector('.carousel_control.next');
        if (heroPrev && heroNext) {
            heroPrev.addEventListener('click', () => changeHeroSlide(-1));
            heroNext.addEventListener('click', () => changeHeroSlide(1));
        }
        
        const wrappers = document.querySelectorAll('.movies_carousel_wrapper');
        wrappers.forEach(wrapper => {
            const track = wrapper.querySelector('.movies_carousel_track');
            const prevBtn = wrapper.querySelector('.prev_btn');
            const nextBtn = wrapper.querySelector('.next_btn');
            
            if (track && prevBtn && nextBtn) {
                prevBtn.addEventListener('click', () => scrollRow(track.id, -1));
                nextBtn.addEventListener('click', () => scrollRow(track.id, 1));
            }
        });
        
    } catch (error) {
        console.error("Carousel failed to load:", error);
    }
});