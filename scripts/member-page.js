// anvandare-egen-sida.js

export function initMemberButtons() {
  const memberBtn = document.querySelector(".header__member-btn");
  const logoutBtn = document.querySelector(".header__logout--btn");

  if (memberBtn) {
    memberBtn.addEventListener("click", (e) => {
      e.preventDefault();
      localStorage.setItem("isMember", "true");
      window.location.href = "/member-page.html";
    });
  }

  if (logoutBtn) {
    logoutBtn.addEventListener("click", (e) => {
      e.preventDefault();
      localStorage.removeItem("isMember");
      window.location.href = "/index.html";
    });
  }
}

export function initMemberPage() {
  const isMember = localStorage.getItem("isMember") === "true";

  if (!isMember) {
    window.location.href = "/index.html";
    return;
  }

  const form = document.querySelector(".review__form");
  if (!form) return;

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    if (!form.checkValidity()) {
      alert("Please fill in all fields correctly.");
      return;
    }

    form.reset();
    alert("Review submitted!");
  });
}


/*export function initMemberButtons() {
    /*const loginBtn = document.querySelector(".header__login--btn");*/
    /*const memberBtn = document.querySelector(".header__member-btn");
     
    const logoutBtn = document.querySelector(".header__logout-btn");

        memberBtn?.addEventListener("click", () => {
     localStorage.setItem("isMember", "true");
      window.location.href = "/member-page.html";
    });

    logoutBtn?.addEventListener("click", () => {
      localStorage.removeItem("isMember");
      window.location.href = "/index.html";
    });
  };

export function initMemberPage() {
  const isLoggedIn = localStorage.getItem('isMember') === 'true';

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
}*/



