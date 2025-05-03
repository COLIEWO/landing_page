// script.js

// Smooth scroll for internal anchor links
const internalLinks = document.querySelectorAll('a[href^="#"]');
internalLinks.forEach(link => {
  link.addEventListener('click', event => {
    event.preventDefault();
    const targetId = link.getAttribute('href');
    document.querySelector(targetId)?.scrollIntoView({
      behavior: 'smooth'
    });
  });
});

// Example: Basic form handling placeholder
const contactForm = document.getElementById('contact-form');
contactForm.addEventListener('submit', event => {
  // You can replace this with actual form submission logic
  alert('Thank you for your message! I will get back to you soon.');
});

document.addEventListener('DOMContentLoaded', () => {
    // ——— Existing smooth-scroll & form code here ———
  
    // Testimonials slider
    const slidesContainer = document.querySelector('.slides');
    const slides = document.querySelectorAll('.slide');
    const prevBtn = document.querySelector('.prev');
    const nextBtn = document.querySelector('.next');
    let current = 0;
  
    function goToSlide(idx) {
      if (idx < 0) idx = slides.length - 1;
      if (idx >= slides.length) idx = 0;
      slidesContainer.style.transform = `translateX(-${idx * 100}%)`;
      current = idx;
    }
  
    prevBtn.addEventListener('click', () => goToSlide(current - 1));
    nextBtn.addEventListener('click', () => goToSlide(current + 1));
  
    // Auto-advance every 5s
    setInterval(() => goToSlide(current + 1), 5000);
  });
  
