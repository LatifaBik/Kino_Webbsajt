
export function toggleTheme() {
  const lightBtn = document.querySelector('.header__theme--light');
  const darkBtn  = document.querySelector('.header__theme--dark');

  const saved = localStorage.getItem('theme');

  // default = dark
  if (saved === 'light') {
    document.body.classList.add('light');
  }

  lightBtn?.addEventListener('click', () => {
    document.body.classList.add('light');
    localStorage.setItem('theme', 'light');
  });

  darkBtn?.addEventListener('click', () => {
    document.body.classList.remove('light');
    localStorage.setItem('theme', 'dark');
  });
}


