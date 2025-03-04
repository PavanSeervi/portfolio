// Smooth scrolling and hamburger close
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
        // Close hamburger menu on click
        const navMenu = document.getElementById('nav-menu');
        const hamburger = document.getElementById('hamburger');
        if (navMenu.classList.contains('active')) {
            navMenu.classList.remove('active');
            hamburger.classList.remove('open');
            hamburger.setAttribute('aria-expanded', 'false');
            navMenu.setAttribute('aria-hidden', 'true');
        }
    });
});

// Hamburger menu toggle
const hamburger = document.getElementById('hamburger');
const navMenu = document.getElementById('nav-menu');

hamburger.addEventListener('click', () => {
    navMenu.classList.toggle('active');
    const isExpanded = hamburger.getAttribute('aria-expanded') === 'true';
    hamburger.setAttribute('aria-expanded', !isExpanded);
    navMenu.setAttribute('aria-hidden', isExpanded);
    hamburger.classList.toggle('open');
});

// Carousel functionality with debugging
document.addEventListener('DOMContentLoaded', () => {
    const carousel = document.querySelector('.carousel');
    const items = document.querySelectorAll('.carousel-item');
    const prevBtn = document.getElementById('prev-btn');
    const nextBtn = document.getElementById('next-btn');
    let currentIndex = 0;

    console.log('Carousel items:', items); // Debug: Check if items are found

    if (!carousel || items.length === 0) {
        console.error('Carousel or items not found in the DOM');
        return;
    }

    function updateCarousel() {
        if (carousel && items.length > 0) {
            carousel.style.transform = `translateX(-${currentIndex * 100}%)`;
            console.log(`Updated carousel to index ${currentIndex}`); // Debug: Track updates
        }
    }

    // Initialize carousel on load
    updateCarousel();

    nextBtn.addEventListener('click', () => {
        currentIndex = (currentIndex + 1) % items.length;
        updateCarousel();
    });

    prevBtn.addEventListener('click', () => {
        currentIndex = (currentIndex - 1 + items.length) % items.length;
        updateCarousel();
    });
});

// Contact form submission
const contactForm = document.getElementById('contact-form');
contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;
    console.log('Form Submitted:', { name, email, message });
    alert('Message sent! (This is a demo—form data logged to console.)');
    contactForm.reset();
});
