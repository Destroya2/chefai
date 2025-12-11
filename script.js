// Smooth scroll
document.querySelectorAll('a[href^="#"]').forEach(link => {
  link.addEventListener('click', e => {
    e.preventDefault();
    const target = document.querySelector(link.getAttribute('href'));
    if (target) {
      const headerOffset = 80;
      const elementPosition = target.offsetTop;
      const offsetPosition = elementPosition - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
      closeNav();
    }
  });
});

// Mobile menu
const navToggle = document.getElementById('navToggle');
const nav = document.getElementById('mainNav');

function closeNav() {
  if (nav) nav.classList.remove('open');
}

if (navToggle && nav) {
  navToggle.addEventListener('click', () => {
    nav.classList.toggle('open');
  });

  // Close menu on outside click
  document.addEventListener('click', e => {
    if (!nav.contains(e.target) && !navToggle.contains(e.target)) {
      closeNav();
    }
  });
}

// Dynamic year
const yearSpan = document.getElementById('year');
if (yearSpan) {
  yearSpan.textContent = new Date().getFullYear();
}

// Form notification
function showThanks() {
  const msg = document.getElementById('notifyMessage');
  if (msg) {
    msg.textContent = '✓ Merci ! Tu seras prévenu dès le lancement';
  }
}
