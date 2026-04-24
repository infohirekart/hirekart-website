// ================================================
//   HireKart — Main JavaScript
// ================================================

// ── MOBILE MENU ──
const hamburger = document.getElementById('hamburger');
const mobileMenu = document.getElementById('mobile-menu');

hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('open');
  mobileMenu.classList.toggle('open');
});

// Close mobile menu on link click
document.querySelectorAll('.mobile-menu a').forEach(link => {
  link.addEventListener('click', () => {
    hamburger.classList.remove('open');
    mobileMenu.classList.remove('open');
  });
});

// ── HOW IT WORKS TABS ──
function switchTab(tab, btn) {
  document.querySelectorAll('.how-tab').forEach(b => b.classList.remove('active'));
  document.querySelectorAll('.steps-wrap').forEach(w => w.classList.remove('active'));
  btn.classList.add('active');
  document.getElementById('tab-' + tab).classList.add('active');
}

// ── NAVBAR SCROLL SHADOW ──
window.addEventListener('scroll', () => {
  const nav = document.querySelector('nav');
  if (window.scrollY > 20) {
    nav.style.boxShadow = '0 4px 24px rgba(27,45,91,0.10)';
  } else {
    nav.style.boxShadow = 'none';
  }
});

// ── FORM SUBMISSION (placeholder) ──
document.querySelectorAll('.btn-form, .btn-search').forEach(btn => {
  btn.addEventListener('click', function (e) {
    if (this.classList.contains('btn-search')) return;
    e.preventDefault();
    const original = this.textContent;
    this.textContent = '✓ Submitted! We\'ll contact you soon.';
    this.style.background = '#16a34a';
    setTimeout(() => {
      this.textContent = original;
      this.style.background = '';
    }, 3000);
  });
});

// ── JOB APPLY BUTTONS ──
document.querySelectorAll('.job-apply').forEach(btn => {
  btn.addEventListener('click', function () {
    const jobTitle = this.closest('.job-card').querySelector('.job-title').textContent;
    const contact = document.getElementById('contact');
    contact.scrollIntoView({ behavior: 'smooth' });
    const roleInput = document.querySelector('#contact input[placeholder*="Role"]');
    if (roleInput) roleInput.value = jobTitle;
  });
});

// ── SCROLL REVEAL (simple intersection observer) ──
const revealEls = document.querySelectorAll('.step-card, .job-card, .test-card, .hire-feature, .cat-chip, .contact-item');

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry, i) => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = '1';
      entry.target.style.transform = 'translateY(0)';
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.1 });

revealEls.forEach((el, i) => {
  el.style.opacity = '0';
  el.style.transform = 'translateY(20px)';
  el.style.transition = `opacity 0.5s ease ${i * 0.05}s, transform 0.5s ease ${i * 0.05}s`;
  observer.observe(el);
});
