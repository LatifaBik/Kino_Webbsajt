
const THEME_KEY = "theme";

export function toggleTheme() {
  const lightBtn = document.querySelector(".header__theme-btn--light");
  const darkBtn = document.querySelector(".header__theme-btn--dark");


  const saved = localStorage.getItem(THEME_KEY);
  if (saved === "light") document.body.classList.add("light");
  if (saved === "dark") document.body.classList.remove("light");

  if (!lightBtn && !darkBtn) return;


  if (lightBtn && lightBtn.dataset.bound === "1") return;
  if (darkBtn && darkBtn.dataset.bound === "1") return;

  if (lightBtn) {
    lightBtn.addEventListener("click", () => {
      document.body.classList.add("light");
      localStorage.setItem(THEME_KEY, "light");
    });
    lightBtn.dataset.bound = "1";
  }

  if (darkBtn) {
    darkBtn.addEventListener("click", () => {
      document.body.classList.remove("light");
      localStorage.setItem(THEME_KEY, "dark");
    });
    darkBtn.dataset.bound = "1";
  }
}

export function closeBanner() {
  const banner = document.getElementById("promoBanner");
  const closeBtn = banner?.querySelector(".close-btn");

  if (!banner || !closeBtn) return;

  if (closeBtn.dataset.bound === "1") return;

  closeBtn.addEventListener("click", () => {
    banner.classList.add("hidden");
  });

  closeBtn.dataset.bound = "1";
}
