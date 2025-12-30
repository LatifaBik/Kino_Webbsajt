
export function scrollRow(id, direction) {
    const el = document.getElementById(id);
    if (el) {
        // Multiplies scroll distance
        el.scrollBy({ left: 500 * direction, behavior: 'smooth' });
    }
}

// Carousel Logic
let currentSlideIndex = 0;

export function changeHeroSlide(direction = 1) {
    const slides = document.querySelectorAll('.carousel .carousel_slide');
    const indicators = document.querySelectorAll('.indicator');
    
    if (slides.length === 0) return;
    
    slides[currentSlideIndex].classList.remove('active');
    if (indicators[currentSlideIndex]) {
        indicators[currentSlideIndex].classList.remove('active');
    }
    
    // Calculate new index with wrap-around
    currentSlideIndex = (currentSlideIndex + direction + slides.length) % slides.length;
    
    // Add active classes to new slide
    slides[currentSlideIndex].classList.add('active');
    if (indicators[currentSlideIndex]) {
        indicators[currentSlideIndex].classList.add('active');
    }
}

// Auto-timer for Slider
if (document.querySelector('.carousel')) {
    setInterval(() => changeHeroSlide(1), 8000); // 8 seconds
}