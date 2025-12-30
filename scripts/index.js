import '../main.scss';
import { toggleMenu } from './menu.js';
import { toggleTheme, closeBanner } from './tema.js';
import { movieCarousel } from './carousel.js';
import { scrollRow, changeHeroSlide } from './movieEventSlider.js';

document.addEventListener('DOMContentLoaded', async () => {
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

    
    toggleMenu();
    movieCarousel();
    closeBanner();
    toggleTheme();
});