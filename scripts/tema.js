export function toggleTheme() {
    const lightBtn = document.querySelector('.header__theme-btn--light');
    const darkBtn = document.querySelector('.header__theme-btn--dark');
    const body = document.body;
    const saved = localStorage.getItem('theme');
    if (saved === 'light') {
        body.classList.add('light');
    }

    lightBtn?.addEventListener('click', () => {
        body.classList.add('light');
        localStorage.setItem('theme', 'light');
    });

    darkBtn?.addEventListener('click', () => {
        body.classList.remove('light');
        localStorage.setItem('theme', 'dark');
    });
}

export function closeBanner() {
    const banner = document.getElementById('promoBanner');
    if (banner) banner.style.display = 'none';
}