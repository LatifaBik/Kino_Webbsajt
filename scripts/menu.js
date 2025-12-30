export function toggleMenu() {
    const menuBtn = document.querySelector('.header__menu-button');
    const closeBtn = document.querySelector('.header__nav-close');
    const nav = document.querySelector('.header__nav');

    if (menuBtn && nav) {
        menuBtn.addEventListener('click', () => {
            nav.classList.add('header__nav--active');
            document.body.style.overflow = 'hidden'; // Prevents background scroll
        });
    }

    if (closeBtn && nav) {
        closeBtn.addEventListener('click', () => {
            nav.classList.remove('header__nav--active');
            document.body.style.overflow = 'auto'; // Restores scroll
        });
    }
}