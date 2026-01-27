/* 
  TESLA-INSPIRED MOTION CONTROLLER
  Minimalist | High Performance 
*/

document.addEventListener('DOMContentLoaded', () => {

    // 1. Header Ghost Transition
    const header = document.querySelector('.header');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });

    // 2. High-Performance Intersection Observer
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const revealCallback = (entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
                observer.unobserve(entry.target);
            }
        });
    };

    const revealObserver = new IntersectionObserver(revealCallback, observerOptions);

    // Register all minimalist reveal elements
    document.querySelectorAll('.reveal-fade-up').forEach(el => {
        revealObserver.observe(el);
    });

    // 3. Hero Instant Entrance
    const heroContent = document.querySelectorAll('#home .reveal-fade-up');
    heroContent.forEach((el, index) => {
        setTimeout(() => {
            el.classList.add('active');
        }, 150 * (index + 1));
    });

    // 4. Smooth Anchor Scrolling
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                window.scrollTo({
                    top: target.offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    });

    // 5. Minimalist Form Feedback
    const minimalForm = document.getElementById('minimal-form');
    if (minimalForm) {
        minimalForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const btn = minimalForm.querySelector('button');
            const originalText = btn.innerText;

            btn.innerText = 'Transmitting...';
            btn.style.opacity = '0.7';

            setTimeout(() => {
                btn.innerText = 'Received';
                btn.style.background = '#28a745';
                btn.style.opacity = '1';
                minimalForm.reset();

                setTimeout(() => {
                    btn.innerText = originalText;
                    btn.style.background = '';
                }, 4000);
            }, 1500);
        });
    }

});
