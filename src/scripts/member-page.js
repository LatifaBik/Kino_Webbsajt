// anvandare-egen-sida.js

export function initAuthButtons() {
    const loginBtn = document.querySelector(".header__login--btn");
    const logoutBtn = document.querySelector(".header__logout--btn");

        loginBtn?.addEventListener("click", () => {
      localStorage.setItem("isLoggedIn", "true");
      window.location.href = "/member-page.html";
    });

    logoutBtn?.addEventListener("click", () => {
      localStorage.removeItem("isLoggedIn");
      window.location.href = "/index.html";
    });
  };

export function initMemberPage() {
  const isLoggedIn = localStorage.getItem('isLoggedIn') === 'true';

  // blockera om INTE inloggad
if (!isLoggedIn) {
    window.location.href = 'index.html';
    return;
  }

  const form = document.querySelector('.review__form');
  if (!form) return;

  form.addEventListener('submit', (e) => {
    e.preventDefault();

    if (!form.checkValidity()) {
      alert('Please fill in all fields correctly.');
      return;
    }

    form.reset();
    alert('Review submitted!');
  });
}



