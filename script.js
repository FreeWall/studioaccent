/* =============================================
   script.js — Accent Recording Studio
   ============================================= */

// ---- Navbar scroll effect ----
const navbar = document.querySelector('.navbar');
function onScroll() {
  if (window.scrollY > 20) {
    navbar.classList.add('scrolled');
  } else {
    navbar.classList.remove('scrolled');
  }
}
window.addEventListener('scroll', onScroll, { passive: true });
onScroll();

// ---- Mobile hamburger ----
const hamburger = document.querySelector('.hamburger');
const navLinks  = document.querySelector('.navbar-nav');
if (hamburger && navLinks) {
  hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('open');
    navLinks.classList.toggle('open');
  });
  // close on link click
  navLinks.querySelectorAll('a').forEach(a => {
    a.addEventListener('click', () => {
      hamburger.classList.remove('open');
      navLinks.classList.remove('open');
    });
  });
}

// ---- Active nav link ----
(function() {
  const path = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.navbar-nav a').forEach(a => {
    const href = a.getAttribute('href');
    if (href === path || (path === '' && href === 'index.html')) {
      a.classList.add('active');
    }
  });
})();

// ---- Scroll animations (Intersection Observer) ----
const fadeEls = document.querySelectorAll('.fade-up');
if (fadeEls.length > 0) {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });
  fadeEls.forEach(el => observer.observe(el));
}

// ---- Contact form (static — sends via mailto) ----
const contactForm = document.getElementById('contact-form');
if (contactForm) {
  contactForm.addEventListener('submit', function(e) {
    e.preventDefault();
    const name    = document.getElementById('cf-name')?.value    || '';
    const email   = document.getElementById('cf-email')?.value   || '';
    const subject = document.getElementById('cf-subject')?.value || 'Dotaz ze webu';
    const message = document.getElementById('cf-message')?.value || '';
    const body = `Jméno: ${name}\nE-mail: ${email}\n\n${message}`;
    window.location.href = `mailto:accent@razdva.cz?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    const success = document.getElementById('form-success');
    if (success) { success.style.display = 'block'; }
    contactForm.reset();
  });
}

// ---- Simple audio player helpers (reference page) ----
document.querySelectorAll('.play-btn').forEach(btn => {
  btn.addEventListener('click', function() {
    const audio = this.closest('.audio-track')?.querySelector('audio');
    if (!audio) return;
    if (audio.paused) {
      // pause all others
      document.querySelectorAll('audio').forEach(a => { if (a !== audio) { a.pause(); a.currentTime = 0; } });
      document.querySelectorAll('.play-btn').forEach(b => b.setAttribute('data-playing', 'false'));
      audio.play();
      this.setAttribute('data-playing', 'true');
    } else {
      audio.pause();
      this.setAttribute('data-playing', 'false');
    }
  });
});

// ---- Lightbox (gallery page) ----
const lightbox = document.getElementById('lightbox');
if (lightbox) {
  const lbImg  = lightbox.querySelector('#lb-img');
  const lbClose = lightbox.querySelector('#lb-close');

  document.querySelectorAll('.gallery-item img').forEach(img => {
    img.parentElement.addEventListener('click', () => {
      lbImg.src = img.src;
      lightbox.style.display = 'flex';
      document.body.style.overflow = 'hidden';
    });
  });

  function closeLB() {
    lightbox.style.display = 'none';
    document.body.style.overflow = '';
  }
  if (lbClose) lbClose.addEventListener('click', closeLB);
  lightbox.addEventListener('click', e => { if (e.target === lightbox) closeLB(); });
  document.addEventListener('keydown', e => { if (e.key === 'Escape') closeLB(); });
}
