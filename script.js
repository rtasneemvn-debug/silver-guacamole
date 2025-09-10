// Custom cursor effect

document.addEventListener('mousemove', (e) => {

    const cursor = document.querySelector('.cursor');

    cursor.style.left = e.clientX + 'px';

    cursor.style.top = e.clientY + 'px';

});

// Navbar background change on scroll

window.addEventListener('scroll', () => {

    const navbar = document.querySelector('.navbar');

    if (window.scrollY > 50) {

        navbar.style.background = 'rgba(255, 255, 255, 0.95)';

        navbar.style.boxShadow = '0 2px 20px rgba(0, 0, 0, 0.1)';

    } else {

        navbar.style.background = 'rgba(255, 255, 255, 0.8)';

        navbar.style.boxShadow = '0 2px 20px rgba(0, 0, 0, 0.1)';

    }

});

// Smooth scrolling for navigation links

document.querySelectorAll('a[href^="#"]').forEach(anchor => {

    anchor.addEventListener('click', function (e) {

        e.preventDefault();

        const targetId = this.getAttribute('href');

        if (targetId === '#') return;

        

        const targetElement = document.querySelector(targetId);

        if (targetElement) {

            window.scrollTo({

                top: targetElement.offsetTop - 80,

                behavior: 'smooth'

            });

        }

    });

});

// Animation on scroll

function animateOnScroll() {

    const elements = document.querySelectorAll('.highlight-card, .skill, .project-card');

    

    elements.forEach(element => {

        const elementPosition = element.getBoundingClientRect().top;

        const screenPosition = window.innerHeight / 1.3;

        

        if (elementPosition < screenPosition) {

            element.style.opacity = 1;

            element.style.transform = 'translateY(0)';

        }

    });

}

// Set initial state for animated elements

document.addEventListener('DOMContentLoaded', () => {

    const elements = document.querySelectorAll('.highlight-card, .skill, .project-card');

    

    elements.forEach(element => {

        element.style.opacity = 0;

        element.style.transform = 'translateY(50px)';

        element.style.transition = 'all 0.5s ease';

    });

    

    // Trigger animation on scroll

    window.addEventListener('scroll', animateOnScroll);

    // Initial check in case elements are already in view

    animateOnScroll();

});

// Form submission handling

const contactForm = document.querySelector('.contact-form');

if (contactForm) {

    contactForm.addEventListener('submit', (e) => {

        e.preventDefault();

        

        // Simple form validation

        const inputs = contactForm.querySelectorAll('input, textarea');

        let isValid = true;

        

        inputs.forEach(input => {

            if (!input.value.trim()) {

                isValid = false;

                input.style.border = '2px solid #ff6b6b';

            } else {

                input.style.border = 'none';

            }

        });

        

        if (isValid) {

            // In a real application, you would send the form data to a server here

            alert('Thank you for your message! I will get back to you soon.');

            contactForm.reset();

        } else {

            alert('Please fill in all fields.');

        }

    });

}

// CTA button animation

const ctaButton = document.querySelector('.cta-button');

if (ctaButton) {

    ctaButton.addEventListener('mouseover', () => {

        ctaButton.style.transform = 'translateY(-5px)';

        ctaButton.style.boxShadow = '0 10px 20px rgba(149, 117, 205, 0.4)';

    });

    

    ctaButton.addEventListener('mouseout', () => {

        ctaButton.style.transform = 'translateY(0)';

        ctaButton.style.boxShadow = '0 4px 15px rgba(149, 117, 205, 0.3)';

    });

    

    ctaButton.addEventListener('click', () => {

        document.querySelector('#projects').scrollIntoView({ behavior: 'smooth' });

    });

}

// Text animation for hero section

function animateText() {

    const animatedText = document.querySelector('.animated-text');

    if (animatedText) {

        setInterval(() => {

            animatedText.classList.toggle('pulse');

        }, 3000);

    }

}

// Initialize all animations

document.addEventListener('DOMContentLoaded', () => {

    animateText();

});