export function closeNotice() {
  const notice = document.querySelector(".notice");
  const closeBtn = document.querySelector(".notice__close");

  if (!notice || !closeBtn) return;

  closeBtn.addEventListener("click", () => {
    notice.style.display = "none";
  });
}
