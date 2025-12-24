
export function toggleTheme() {

  /*const btn = document.getElementById('theme-toggle');
const icon = document.getElementById('theme-icon');

function setIcon(isDark) {
  icon.classList.remove('fa-moon', 'fa-circle-half-stroke');
  icon.classList.add(isDark ? 'fa-circle-half-stroke' : 'fa-moon');
}

// init från localStorage
/*const savedTheme = localStorage.getItem('theme');
const isDark = savedTheme === 'dark';
document.body.classList.toggle('dark', isDark);
setIcon(isDark);

btn.addEventListener('click', () => {
  const nowDark = document.body.classList.toggle('dark');
  localStorage.setItem('theme', nowDark ? 'dark' : 'light');
  setIcon(nowDark);
});*/

  const toggleBtn = document.querySelector('#theme-toggle');

  // Sparat tema vid start
  const savedTheme = localStorage.getItem('theme');
  if (savedTheme === 'dark') {
    document.body.classList.add('dark');
  }

  if (!toggleBtn) return;

  toggleBtn.addEventListener('click', () => {
    document.body.classList.toggle('dark');

    const theme = document.body.classList.contains('dark')
      ? 'dark'
      : 'light';

    localStorage.setItem('theme', theme);
  });
  
 /* const btn = document.querySelector('#theme-toggle');
const icon = btn.querySelector('i');

btn.addEventListener('click', () => {
  document.body.classList.toggle('dark');

  if (document.body.classList.contains('dark')) {
    icon.classList.replace('fa-moon', 'fa-sun');
  } else {
    icon.classList.replace('fa-sun', 'fa-moon');
  }
});*/

}
