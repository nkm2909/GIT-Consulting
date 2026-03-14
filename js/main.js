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
    });
    navLinks.querySelectorAll('a').forEach(a => {
      a.addEventListener('click', () => navLinks.classList.remove('open'));
    });
  }

  // ── Active nav link ────────────────────────────────────────
  const currentPage = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav-links a').forEach(link => {
    const href = link.getAttribute('href').split('/').pop();
    if (href === currentPage || (currentPage === '' && href === 'index.html')) {
      link.classList.add('active');
    }
  });

  // ── Scroll fade-up animations ──────────────────────────────
  const observer = new IntersectionObserver(entries => {
    entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible'); });
  }, { threshold: 0.12 });
  document.querySelectorAll('.fade-up').forEach(el => observer.observe(el));

  // ── Counter animation ──────────────────────────────────────
  function animateCounter(el) {
    const target   = parseInt(el.dataset.target, 10);
    const suffix   = el.dataset.suffix || '';
    const duration = 1600;
    const step     = target / (duration / 16);
    let current    = 0;
    const tick = () => {
      current = Math.min(current + step, target);
      el.textContent = Math.floor(current) + suffix;
      if (current < target) requestAnimationFrame(tick);
    };
    requestAnimationFrame(tick);
  }
  const counterObs = new IntersectionObserver(entries => {
    entries.forEach(e => {
      if (e.isIntersecting && !e.target.dataset.animated) {
        e.target.dataset.animated = true;
        animateCounter(e.target);
      }
    });
  }, { threshold: 0.5 });
  document.querySelectorAll('[data-target]').forEach(el => counterObs.observe(el));

  // ── Contact form – AJAX to Formspree (no redirect) ─────────
  const form = document.getElementById('contactForm');
  if (form) {
    form.addEventListener('submit', async (e) => {
      e.preventDefault();
      const btn = form.querySelector('.form-submit');
      const originalText = btn.textContent;
      btn.textContent = 'Sending…';
      btn.disabled = true;

      try {
        const res = await fetch(form.action, {
          method: 'POST',
          body: new FormData(form),
          headers: { 'Accept': 'application/json' }
        });

        if (res.ok) {
          form.innerHTML = `
            <div style="text-align:center;padding:56px 24px;">
              <div style="font-size:52px;margin-bottom:20px;">✅</div>
              <h3 style="font-family:'Syne',sans-serif;font-size:24px;font-weight:700;margin-bottom:14px;color:#F0F4FF;">
                Message Sent!
              </h3>
              <p style="color:#8A9BBF;font-size:15px;line-height:1.7;max-width:360px;margin:0 auto;">
                Thanks for reaching out. Our team will be in touch within 1–2 business days.
              </p>
            </div>`;
        } else {
          const data = await res.json();
          throw new Error(data?.errors?.[0]?.message || 'Submission failed');
        }
      } catch (err) {
        btn.textContent = originalText;
        btn.disabled = false;
        // Show inline error rather than alert
        let errEl = form.querySelector('.form-error');
        if (!errEl) {
          errEl = document.createElement('p');
          errEl.className = 'form-error';
          errEl.style.cssText = 'color:#ff6b6b;font-size:14px;margin-top:12px;text-align:center;';
          form.appendChild(errEl);
        }
        errEl.textContent = 'Something went wrong. Please email us directly at sales@gitconsulting.com.au';
      }
    });
  }

});
