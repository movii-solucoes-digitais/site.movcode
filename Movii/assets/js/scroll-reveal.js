(() => {
    const hiddenElements = document.querySelectorAll('.escondido');

    if (!hiddenElements.length || typeof window.IntersectionObserver === 'undefined') {
        return;
    }

    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add('aparecer');
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.1 });

    hiddenElements.forEach((element) => observer.observe(element));
})();