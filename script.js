// Register GSAP ScrollTrigger
gsap.registerPlugin(ScrollTrigger);

document.addEventListener('DOMContentLoaded', () => {
    // -----------------------------------------
    // Navbar Scroll Effect
    // -----------------------------------------
    const navbar = document.getElementById('navbar');
    
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });

    // -----------------------------------------
    // FAQ Accordion
    // -----------------------------------------
    const faqQuestions = document.querySelectorAll('.faq-question');

    faqQuestions.forEach(question => {
        question.addEventListener('click', () => {
            const item = question.parentElement;
            const answer = question.nextElementSibling;
            
            // Close all other open items
            document.querySelectorAll('.faq-item').forEach(otherItem => {
                if (otherItem !== item && otherItem.classList.contains('active')) {
                    otherItem.classList.remove('active');
                    otherItem.querySelector('.faq-answer').style.maxHeight = null;
                }
            });
            
            // Toggle current item
            item.classList.toggle('active');
            
            if (item.classList.contains('active')) {
                answer.style.maxHeight = answer.scrollHeight + 'px';
            } else {
                answer.style.maxHeight = null;
            }
        });
    });

    // -----------------------------------------
    // GSAP Animations (Scroll Reveal)
    // -----------------------------------------

    // Global Reveal Elements
    const revealElements = document.querySelectorAll('.gs-reveal');
    revealElements.forEach(el => {
        gsap.fromTo(el, 
            { opacity: 0, y: 30 },
            { 
                opacity: 1, 
                y: 0, 
                duration: 1, 
                ease: "power2.out",
                scrollTrigger: {
                    trigger: el,
                    start: "top 85%",
                    toggleActions: "play none none reverse"
                }
            }
        );
    });

    // Slide Up Elements (Staggered inside grids)
    const upElements = document.querySelectorAll('.gs-up');
    upElements.forEach(el => {
        gsap.fromTo(el, 
            { opacity: 0, y: 50 },
            { 
                opacity: 1, 
                y: 0, 
                duration: 0.8, 
                ease: "back.out(1.7)",
                scrollTrigger: {
                    trigger: el,
                    start: "top 85%",
                    toggleActions: "play none none reverse"
                }
            }
        );
    });

    // Fade Right Elements
    const fadeRightElements = document.querySelectorAll('.gs-fade-right');
    fadeRightElements.forEach(el => {
        gsap.fromTo(el, 
            { opacity: 0, x: -50 },
            { 
                opacity: 1, 
                x: 0, 
                duration: 1, 
                ease: "power2.out",
                scrollTrigger: {
                    trigger: el,
                    start: "top 80%",
                    toggleActions: "play none none reverse"
                }
            }
        );
    });

    // Fade Left Elements
    const fadeLeftElements = document.querySelectorAll('.gs-fade-left');
    fadeLeftElements.forEach(el => {
        gsap.fromTo(el, 
            { opacity: 0, x: 50 },
            { 
                opacity: 1, 
                x: 0, 
                duration: 1, 
                ease: "power2.out",
                scrollTrigger: {
                    trigger: el,
                    start: "top 80%",
                    toggleActions: "play none none reverse"
                }
            }
        );
    });

    // Smooth Scroll for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            if(targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if(targetElement) {
                const offset = 80; // Navbar height offset
                const bodyRect = document.body.getBoundingClientRect().top;
                const elementRect = targetElement.getBoundingClientRect().top;
                const elementPosition = elementRect - bodyRect;
                const offsetPosition = elementPosition - offset;

                window.scrollTo({
                    top: offsetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });

});
