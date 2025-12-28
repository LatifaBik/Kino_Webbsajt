// anvandare-egen-sida.js

export function initMemberPage() {
  const isLoggedIn = localStorage.getItem('isLoggedIn') === 'true';

  // blockera om INTE inloggad
  if (!isLoggedIn) {
    window.location.href = 'index.html';
    return;
  }

  const form = document.querySelector('#reviewForm');
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


// login/logout ska funka på alla sidor
const loginBtn = document.querySelector('.btn_join');
const logoutBtn = document.querySelector('.btn_logout');

loginBtn?.addEventListener('click', () => {
  localStorage.setItem('isLoggedIn', 'true');
  window.location.href = '/member-page.html';
});

logoutBtn?.addEventListener('click', () => {
  localStorage.removeItem('isLoggedIn');
  window.location.href = '/index.html';
});

