export function toggleLogin() {
    const modal = document.querySelector('.login__modal');
    const openBtn = document.querySelector('.header__login-btn');
    const closeBtn = document.querySelector('.login__close');
    const submit = document.querySelector('.login__submit');

  
    openBtn.addEventListener('click', () => {
        modal.style.display = 'flex';
    });

    closeBtn.addEventListener('click', () => {
        modal.style.display = 'none';
    });

    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
            modal.style.display = 'none';
        }
    });

    submit.addEventListener('click', (event) => {
        event.preventDefault();
        window.location.href = "member-page.html"; 
    });
}
