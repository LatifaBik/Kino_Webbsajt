

export function toggleMenu() {
  const menuButton = document.querySelector('.header__menu-button');
  const nav = document.querySelector('.header__nav');
  const closeButton = document.querySelector('.header__nav-close');

  if (!menuButton || !nav) return;

  menuButton.addEventListener('click', () => {
    nav.classList.add('header__nav--active');
    document.body.style.overflow = 'hidden'; 
  });

  if (closeButton) {
    closeButton.addEventListener('click', () => {
      nav.classList.remove('header__nav--active');
      document.body.style.overflow = ''; 
    });
  }
}
