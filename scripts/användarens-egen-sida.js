// anvandare-egen-sida.js

export function initMemberPage() {
  const isLoggedIn = localStorage.getItem('isLoggedIn') === 'true';

  if (!isLoggedIn) {
    window.location.href = 'index.html';
    return;
  }

  
}

const loginBtn = document.querySelector('.btn_join');
const logoutBtn = document.querySelector('.btn_logout');

loginBtn?.addEventListener('click', () => {
  localStorage.setItem('isLoggedIn', 'true');
  window.location.href = 'anvandarens-egen-sida.html';
});

logoutBtn?.addEventListener('click', () => {
  localStorage.removeItem('isLoggedIn');
  window.location.href = 'index.html';
});
