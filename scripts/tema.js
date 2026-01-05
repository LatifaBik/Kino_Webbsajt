
export function toggleTheme() {
  const lightBtn = document.querySelector('.header__theme-btn--light');
  const darkBtn  = document.querySelector('.header__theme-btn--dark');

 
 // init från localStorage
 const saved = localStorage.getItem('theme');
  if (saved === 'light') document.body.classList.add('light');
  else document.body.classList.remove('light');

// klick: gå till LIGHT
  lightBtn?.addEventListener('click', () => {
    document.body.classList.add('light');
    localStorage.setItem('theme', 'light');
  });

// klick: gå till DARK
  darkBtn?.addEventListener('click', () => {
    document.body.classList.remove('light');
    localStorage.setItem('theme', 'dark');
  });

}






