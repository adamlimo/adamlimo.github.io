// scripts.js
document.addEventListener('DOMContentLoaded', () => {
    const loader = document.querySelector('.loader');
    if (loader) {
        window.addEventListener('load', () => {
            loader.style.opacity = '0';
            setTimeout(() => loader.style.display = 'none', 500);
        });
    }

    const header = document.querySelector('header');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });

    const ctaButton = document.querySelector('.cta-button');
    if (ctaButton) {
        ctaButton.addEventListener('click', () => {
            document.querySelector('#booking-widget').scrollIntoView({ behavior: 'smooth' });
        });
    }

    // GSAP Animations
    gsap.from('.hero-content', {
        duration: 1.5,
        opacity: 0,
        y: -50,
        ease: 'power2.out'
    });

    gsap.from('.service-card', {
        scrollTrigger: {
            trigger: '.service-grid',
            start: 'top bottom',
            toggleActions: 'play none none none'
        },
        duration: 1,
        opacity: 0,
        y: 50,
        stagger: 0.2,
        ease: 'power2.out'
    });

    gsap.from('.fleet-item', {
        scrollTrigger: {
            trigger: '.fleet-carousel',
            start: 'top bottom',
            toggleActions: 'play none none none'
        },
        duration: 1.5,
        opacity: 0,
        y: 50,
        stagger: 0.3,
        ease: 'power2.out'
    });

    gsap.from('.testimonial', {
        scrollTrigger: {
            trigger: '.testimonial-slider',
            start: 'top bottom',
            toggleActions: 'play none none none'
        },
        duration: 1.5,
        opacity: 0,
        y: 50,
        stagger: 0.3,
        ease: 'power2.out'
    });

    gsap.from('#contact-form', {
        scrollTrigger: {
            trigger: '#contact-form',
            start: 'top bottom',
            toggleActions: 'play none none none'
        },
        duration: 1.5,
        opacity: 0,
        y: 50,
        ease: 'power2.out'
    });
});
