// Menu

export function toggleMenu() {

  const menuButton = document.querySelector('.header__menu-button');
  const navContainer = document.querySelector('.header__nav');
  const closeButton = document.querySelector('.header__nav-close');

  if (menuButton && navContainer && closeButton) {
    menuButton.addEventListener('click', () => {
      navContainer.classList.add('header__nav--active');
    });

    closeButton.addEventListener('click', () => {
      navContainer.classList.remove('header__nav--active');
    });
  }
}