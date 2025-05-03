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
