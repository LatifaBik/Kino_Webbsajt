

export function toggleRegister() {

  const modal = document.querySelector('.register__modal');
  const openBtn = document.querySelector('.open-register');
  const closeBtn = document.querySelector('.register__close');
  const submit = document.querySelector('.register__submit');

  openBtn.addEventListener('click', () => {
    modal.style.display = 'flex'; 
  });

  closeBtn.addEventListener('click', () => {
    modal.style.display = 'none'; 
  });

  // Extra: stäng om man klickar utanför innehållet
  modal.addEventListener('click', (e) => {
    if (e.target === modal) {
      modal.style.display = 'none';
    }
  });

  submit.addEventListener('click', (event) => {
   event.preventDefault();
   modal.style.display = 'none';
   /*window.location.href = "member-page.html";*/
  })

}