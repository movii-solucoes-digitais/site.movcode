(() => {
    const slider = document.getElementById('marqueeTrack');

    if (!slider) {
        return;
    }

    let isPointerDown = false;
    let isPaused = false;
    let startX = 0;
    let dragStartTranslate = 0;
    let currentTranslate = 0;
    const speed = 1;
    let loopWidth = 0;
    let animationStarted = false;

    function calculateLoopWidth() {
        const cards = slider.querySelectorAll('.servico-card');
        if (!cards.length) {
            return;
        }

        loopWidth = (cards[0].offsetWidth + 30) * 5;
    }

    function animate() {
        if (!isPointerDown && !isPaused) {
            currentTranslate -= speed;
            if (Math.abs(currentTranslate) >= loopWidth) {
                currentTranslate = 0;
            }
            slider.style.transform = `translateX(${currentTranslate}px)`;
        }

        requestAnimationFrame(animate);
    }

    window.addEventListener('load', () => {
        requestAnimationFrame(() => {
            calculateLoopWidth();
            if (!animationStarted) {
                animationStarted = true;
                animate();
            }
        });
    });

    window.addEventListener('resize', calculateLoopWidth);

    slider.addEventListener('mouseenter', () => {
        isPaused = true;
    });

    slider.addEventListener('mouseleave', () => {
        isPaused = false;
        isPointerDown = false;
        slider.style.cursor = 'grab';
    });

    slider.addEventListener('mousedown', (event) => {
        isPointerDown = true;
        startX = event.pageX;
        dragStartTranslate = currentTranslate;
        slider.style.cursor = 'grabbing';
    });

    slider.addEventListener('mouseup', () => {
        isPointerDown = false;
        slider.style.cursor = 'grab';
    });

    slider.addEventListener('mousemove', (event) => {
        if (!isPointerDown) {
            return;
        }

        event.preventDefault();
        currentTranslate = dragStartTranslate + (event.pageX - startX);

        if (currentTranslate > 0) {
            currentTranslate = 0;
        }

        if (Math.abs(currentTranslate) >= loopWidth) {
            currentTranslate = -(loopWidth - 1);
        }

        slider.style.transform = `translateX(${currentTranslate}px)`;
    });

    slider.addEventListener('touchstart', (event) => {
        isPointerDown = true;
        isPaused = true;
        startX = event.touches[0].pageX;
        dragStartTranslate = currentTranslate;
    }, { passive: true });

    slider.addEventListener('touchend', () => {
        isPointerDown = false;
        isPaused = false;
    });

    slider.addEventListener('touchmove', (event) => {
        if (!isPointerDown) {
            return;
        }

        currentTranslate = dragStartTranslate + (event.touches[0].pageX - startX);

        if (currentTranslate > 0) {
            currentTranslate = 0;
        }

        if (Math.abs(currentTranslate) >= loopWidth) {
            currentTranslate = -(loopWidth - 1);
        }

        slider.style.transform = `translateX(${currentTranslate}px)`;
    }, { passive: true });
})();