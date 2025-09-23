document.addEventListener("DOMContentLoaded", function () {
  // Minimal slider with dots
  const slides = document.querySelectorAll('.slide');
  const dotsContainer = document.querySelector('.slider-dots');
  if (slides.length && dotsContainer) {
    slides.forEach((_, i) => {
      const dot = document.createElement('button');
      dot.className = 'slider-dot' + (i === 0 ? ' active' : '');
      dot.setAttribute('aria-label', `Go to slide ${i + 1}`);
      dotsContainer.appendChild(dot);
    });
    const dots = document.querySelectorAll('.slider-dot');
    let current = 0;
    function showSlide(idx) {
      slides.forEach((slide, i) => slide.classList.toggle('active', i === idx));
      dots.forEach((dot, i) => dot.classList.toggle('active', i === idx));
    }
    dots.forEach((dot, i) => {
      dot.addEventListener('click', () => {
        current = i;
        showSlide(current);
      });
    });
    setInterval(() => {
      current = (current + 1) % slides.length;
      showSlide(current);
    }, 3500);
    showSlide(current);
  }

  // Minimal form validation
  const form = document.getElementById('contactForm');
  if (form) {
    form.addEventListener('submit', function (e) {
      e.preventDefault();
      const name = form.elements['name'].value.trim();
      const email = form.elements['email'].value.trim();
      const message = form.elements['message'].value.trim();
      const msg = document.getElementById('formMsg');
      if (!name || !email || !message) {
        msg.textContent = "Please fill in all fields.";
        msg.style.color = "var(--rose-gold)";
        return;
      }
      if (!/^[^@]+@[^@]+\.[^@]+$/.test(email)) {
        msg.textContent = "Please enter a valid email address.";
        msg.style.color = "var(--rose-gold)";
        return;
      }
      msg.textContent = "Thank you for your message!";
      msg.style.color = "var(--pink)";
      form.reset();
    });
  }
});

