(() => {
    const yearElement = document.getElementById('anoAtual');
    const header = document.querySelector('.site-header');
    const homeAnchors = document.querySelectorAll('a[href="#inicio"]');

    if (yearElement) {
        yearElement.textContent = new Date().getFullYear();
    }

    if (header) {
        window.addEventListener('scroll', () => {
            header.classList.toggle('scrolled', window.scrollY > 50);
        });
    }

    homeAnchors.forEach((anchor) => {
        anchor.addEventListener('click', (event) => {
            event.preventDefault();
            window.scrollTo({ top: 0, behavior: 'smooth' });
            history.pushState(null, '', '#inicio');
        });
    });
})();