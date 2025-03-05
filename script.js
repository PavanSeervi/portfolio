// Smooth scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', (e) => {
        e.preventDefault();
        document.querySelector(anchor.getAttribute('href')).scrollIntoView({ behavior: 'smooth' });
        const navMenu = document.getElementById('nav-menu');
        const hamburger = document.getElementById('hamburger');
        if (navMenu.classList.contains('active')) {
            navMenu.classList.remove('active');
            hamburger.classList.remove('open');
        }
    });
});

// Hamburger menu
const hamburger = document.getElementById('hamburger');
const navMenu = document.getElementById('nav-menu');
hamburger.addEventListener('click', () => {
    navMenu.classList.toggle('active');
    hamburger.classList.toggle('open');
});

// Carousel with Debugging and Fallback
document.addEventListener('DOMContentLoaded', () => {
    const carousel = document.querySelector('.carousel');
    const items = document.querySelectorAll('.carousel-item');
    const prevBtn = document.getElementById('prev-btn');
    const nextBtn = document.getElementById('next-btn');
    let currentIndex = 0;

    // Debugging logs
    console.log('Carousel found:', carousel);
    console.log('Carousel items count:', items.length);
    console.log('Prev button:', prevBtn);
    console.log('Next button:', nextBtn);

    // Ensure carousel or fallback is always displayed
    if (!carousel || !items.length) {
        console.error('Carousel elements not found. Displaying certifications statically.');
        if (carousel && items.length) {
            carousel.classList.add('static');
            items.forEach(item => {
                item.style.minWidth = 'auto';
                item.style.transform = 'none';
                item.style.display = 'block';
                item.style.background = '#EFE9E0';
                item.style.color = '#333';
                item.style.padding = '1.5rem';
                item.style.borderRadius = '5px';
                item.style.marginBottom = '1rem';
                item.style.boxShadow = '0 4px 10px rgba(0, 0, 0, 0.1)';
            });
            if (prevBtn) prevBtn.style.display = 'none';
            if (nextBtn) nextBtn.style.display = 'none';
        }
        return;
    }

    if (!prevBtn || !nextBtn) {
        console.error('Carousel buttons not found. Displaying certifications statically.');
        carousel.classList.add('static');
        items.forEach(item => {
            item.style.minWidth = 'auto';
            item.style.transform = 'none';
            item.style.display = 'block';
            item.style.background = '#EFE9E0';
            item.style.color = '#333';
            item.style.padding = '1.5rem';
            item.style.borderRadius = '5px';
            item.style.marginBottom = '1rem';
            item.style.boxShadow = '0 4px 10px rgba(0, 0, 0, 0.1)';
        });
        return;
    }

    const updateCarousel = () => {
        carousel.style.transform = `translateX(-${currentIndex * 100}%)`;
        console.log('Carousel updated to index:', currentIndex);
        // Ensure all items are visible initially
        items.forEach(item => item.style.display = 'block');
    };

    nextBtn.addEventListener('click', () => {
        currentIndex = (currentIndex + 1) % items.length;
        updateCarousel();
    });

    prevBtn.addEventListener('click', () => {
        currentIndex = (currentIndex - 1 + items.length) % items.length;
        updateCarousel();
    });

    updateCarousel(); // Initial render
});

// Back to Top
const backToTop = document.getElementById('back-to-top');
window.addEventListener('scroll', () => {
    backToTop.style.display = window.scrollY > 300 ? 'block' : 'none';
});
backToTop.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
});

// Contact Form (EmailJS)
emailjs.init('YOUR_USER_ID'); // Replace with your EmailJS user ID
document.getElementById('contact-form').addEventListener('submit', (e) => {
    e.preventDefault();
    emailjs.send('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', {
        name: document.getElementById('name').value,
        email: document.getElementById('email').value,
        message: document.getElementById('message').value
    }).then(() => {
        alert('Message sent successfully!');
        document.getElementById('contact-form').reset();
    }, (error) => {
        alert('Failed to send message: ' + error.text);
    });
});
