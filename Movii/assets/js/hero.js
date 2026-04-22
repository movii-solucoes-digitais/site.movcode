(() => {
    const typewriterText = document.getElementById('typewriter-text');
    const dashboardNumbers = document.querySelectorAll('[data-dashboard-target]');

    if (dashboardNumbers.length) {
        const animateValue = (element) => {
            const target = Number(element.dataset.dashboardTarget || 0);
            const suffix = element.dataset.dashboardSuffix || '';
            const duration = 1400;
            const startTime = performance.now();

            const step = (currentTime) => {
                const progress = Math.min((currentTime - startTime) / duration, 1);
                const easedProgress = 1 - Math.pow(1 - progress, 3);
                const currentValue = Math.round(target * easedProgress);

                element.textContent = `${currentValue}${suffix}`;

                if (progress < 1) {
                    requestAnimationFrame(step);
                }
            };

            requestAnimationFrame(step);
        };

        dashboardNumbers.forEach((element, index) => {
            setTimeout(() => animateValue(element), 200 + index * 120);
        });
    }

    if (!typewriterText) {
        return;
    }

    const words = window.MOVII_CONFIG?.typewriterWords ?? [];
    let wordIndex = 0;
    let letterIndex = 0;
    let deleting = false;

    function type() {
        const currentWord = words[wordIndex];

        if (!currentWord) {
            return;
        }

        typewriterText.textContent = deleting
            ? currentWord.substring(0, letterIndex - 1)
            : currentWord.substring(0, letterIndex + 1);

        deleting ? letterIndex-- : letterIndex++;

        let speed = deleting ? 50 : 100;

        if (!deleting && letterIndex === currentWord.length) {
            speed = 2000;
            deleting = true;
        } else if (deleting && letterIndex === 0) {
            deleting = false;
            wordIndex = (wordIndex + 1) % words.length;
            speed = 500;
        }

        setTimeout(type, speed);
    }

    setTimeout(type, 1000);
})();
