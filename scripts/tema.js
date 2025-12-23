

const toggleBtn = document.querySelector('theme-toggle');

toggleBtn.addEventListener('click', () => {
  document.body.classList.toggle('dark');

  // spara valet
  const theme = document.body.classList.contains('dark') ? 'dark' : 'light';
  localStorage.setItem('theme', theme);
});

const savedTheme = localStorage.getItem('theme');

if (savedTheme === 'dark') {
  document.body.classList.add('dark');
}

