// GIT Consulting – main.js

document.addEventListener('DOMContentLoaded', () => {

  // ── Navbar scroll ──────────────────────────────────────────
  const navbar = document.getElementById('navbar');
  if (navbar) {
    window.addEventListener('scroll', () => {
      navbar.classList.toggle('scrolled', window.scrollY > 40);
    });
  }

  // ── Mobile menu ────────────────────────────────────────────
  const hamburger = document.querySelector('.hamburger');
  const navLinks  = document.querySelector('.nav-links');
  if (hamburger && navLinks) {
    hamburger.addEventListener('click', () => {
      navLinks.classList.toggle('open');
      hamburger.classList.toggle('open');
    });
    navLinks.querySelectorAll('a').forEach(a => {
      a.addEventListener('click', () => {
        navLinks.classList.remove('open');
        hamburger.classList.remove('open');
      });
    });
  }

  // ── Active nav link (current page) ────────────────────────
  const currentPath = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav-links a').forEach(link => {
    const href = link.getAttribute('href').split('/').pop();
    if (href === currentPath || (currentPath === '' && href === 'index.html')) {
      link.classList.add('active');
    }
  });

  // ── Scroll fade-up animations ──────────────────────────────
  const observer = new IntersectionObserver(entries => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        e.target.classList.add('visible');
      }
    });
  }, { threshold: 0.12 });

  document.querySelectorAll('.fade-up').forEach(el => observer.observe(el));

  // ── Counter animation ──────────────────────────────────────
  function animateCounter(el) {
    const target = parseInt(el.dataset.target, 10);
    const suffix = el.dataset.suffix || '';
    const duration = 1600;
    const step = target / (duration / 16);
    let current = 0;
    const tick = () => {
      current = Math.min(current + step, target);
      el.textContent = Math.floor(current) + suffix;
      if (current < target) requestAnimationFrame(tick);
    };
    requestAnimationFrame(tick);
  }

  const counterObserver = new IntersectionObserver(entries => {
    entries.forEach(e => {
      if (e.isIntersecting && !e.target.dataset.animated) {
        e.target.dataset.animated = true;
        animateCounter(e.target);
      }
    });
  }, { threshold: 0.5 });

  document.querySelectorAll('[data-target]').forEach(el => counterObserver.observe(el));

const form = document.getElementById('contactForm');
if (form) {
  form.addEventListener('submit', async (e) => {
    e.preventDefault();
    const btn = form.querySelector('.form-submit');
    btn.textContent = 'Sending...';
    btn.disabled = true;

    try {
      const res = await fetch(form.action, {
        method: 'POST',
        body: new FormData(form),
        headers: { 'Accept': 'application/json' }
      });

      if (res.ok) {
        form.innerHTML = `
          <div style="text-align:center;padding:48px 0;">
            <div style="font-size:48px;margin-bottom:16px;">✅</div>
            <h3 style="font-family:var(--font-display);font-size:22px;margin-bottom:12px;">Message Sent!</h3>
            <p style="color:var(--muted);">Thanks for reaching out. We'll be in touch within 1–2 business days.</p>
          </div>`;
      } else {
        throw new Error('Failed');
      }
    } catch {
      btn.textContent = 'Send Message ↗';
      btn.disabled = false;
      alert('Something went wrong. Please email us directly at sales@gitconsulting.com.au');
    }
  });
}

});
