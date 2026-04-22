(() => {
    const contactForm = document.getElementById('contactForm');
    const formFeedback = document.getElementById('formFeedback');
    const config = window.MOVII_CONFIG;

    if (!contactForm || !formFeedback || !config) {
        return;
    }

    if (window.emailjs?.init) {
        window.emailjs.init({ publicKey: config.emailjsPublicKey });
    }

    contactForm.addEventListener('submit', async (event) => {
        event.preventDefault();

        const nome = document.getElementById('nome')?.value.trim() ?? '';
        const email = document.getElementById('email')?.value.trim() ?? '';
        const mensagem = document.getElementById('mensagem')?.value.trim() ?? '';

        if (!nome || !email || !mensagem) {
            return;
        }

        const submitButton = contactForm.querySelector('button[type="submit"]');
        if (!submitButton) {
            return;
        }

        submitButton.disabled = true;
        submitButton.textContent = 'Enviando...';
        formFeedback.style.display = 'none';

        try {
            await window.emailjs.send(config.emailjsServiceId, config.emailjsTemplateId, {
                nome,
                email,
                mensagem,
                reply_to: email
            });

            formFeedback.className = 'form-feedback success';
            formFeedback.textContent = '✓ Mensagem enviada! Retornaremos em breve.';
            formFeedback.style.display = 'block';
            contactForm.reset();
        } catch (error) {
            console.warn('EmailJS não configurado, redirecionando para WhatsApp.', error);
            const whatsappText = `Olá, equipe movii!\n\nMeu nome é *${nome}*.\nMeu e-mail: ${email}\n\n*Como vocês podem me ajudar:*\n${mensagem}`;
            window.open(`https://wa.me/${config.whatsappNumber}?text=${encodeURIComponent(whatsappText)}`, '_blank', 'noopener,noreferrer');

            formFeedback.className = 'form-feedback success';
            formFeedback.textContent = '✓ Redirecionando para o WhatsApp...';
            formFeedback.style.display = 'block';
            contactForm.reset();
        } finally {
            submitButton.disabled = false;
            submitButton.textContent = 'Enviar Mensagem';
        }
    });
})();