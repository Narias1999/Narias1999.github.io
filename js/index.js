/* ============================================================
   MOBILE NAVIGATION
   ============================================================ */
const hamburger = document.querySelector('.hamburger');
const navMenu   = document.querySelector('.nav-menu');

hamburger.addEventListener('click', () => {
  const expanded = hamburger.getAttribute('aria-expanded') === 'true';
  hamburger.setAttribute('aria-expanded', !expanded);
  hamburger.classList.toggle('active');
  navMenu.classList.toggle('active');
});

document.querySelectorAll('.nav-link').forEach(link => {
  link.addEventListener('click', () => {
    hamburger.classList.remove('active');
    navMenu.classList.remove('active');
    hamburger.setAttribute('aria-expanded', 'false');
  });
});

hamburger.addEventListener('keydown', (e) => {
  if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); hamburger.click(); }
});

/* ============================================================
   NAVBAR SCROLL STATE
   ============================================================ */
const navbar = document.querySelector('.navbar');

window.addEventListener('scroll', () => {
  navbar.classList.toggle('scrolled', window.scrollY > 60);
}, { passive: true });

/* ============================================================
   SMOOTH SCROLL (anchor links)
   ============================================================ */
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      window.scrollTo({ top: target.offsetTop - 80, behavior: 'smooth' });
    }
  });
});

/* ============================================================
   LAZY IMAGE FADE-IN
   ============================================================ */
document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('img[loading="lazy"]').forEach(img => {
    img.style.opacity = '0';
    img.style.transition = 'opacity 0.4s ease';
    img.addEventListener('load', () => { img.style.opacity = '1'; });
    if (img.complete) img.style.opacity = '1';
  });
});

/* ============================================================
   ROLE CYCLER — independent of GSAP, graceful fallback
   ============================================================ */
const roles = [
  'Senior Software Engineer',
  'Tech Lead',
  'Claude Code Supervisor',
];
let currentRole = 0;
const roleEl = document.querySelector('.role-text');

function cycleRole() {
  currentRole = (currentRole + 1) % roles.length;

  if (window.__gsapReady && !window.__reducedMotion) {
    gsap.to(roleEl, {
      y: -20, opacity: 0, duration: 0.3, ease: 'power2.in',
      onComplete: () => {
        roleEl.textContent = roles[currentRole];
        gsap.fromTo(roleEl,
          { y: 20, opacity: 0 },
          { y: 0,  opacity: 1, duration: 0.35, ease: 'power2.out' }
        );
      }
    });
  } else {
    roleEl.textContent = roles[currentRole];
  }
}

setInterval(cycleRole, 3200);

/* ============================================================
   GSAP ANIMATIONS
   ============================================================ */
window.__reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

document.addEventListener('DOMContentLoaded', () => {
  if (window.__reducedMotion || typeof gsap === 'undefined') return;

  window.__gsapReady = true;
  gsap.registerPlugin(ScrollTrigger);

  /* --- Hero load animation --- */
  const heroTl = gsap.timeline({ defaults: { ease: 'power3.out' } });

  heroTl
    .fromTo('.hero-title',
      { y: 50, opacity: 0 },
      { y: 0,  opacity: 1, duration: 0.9 }
    )
    .fromTo('.hero-role',
      { y: 30, opacity: 0 },
      { y: 0,  opacity: 1, duration: 0.7 },
      '-=0.5'
    )
    .fromTo('.hero-description',
      { y: 24, opacity: 0 },
      { y: 0,  opacity: 1, duration: 0.6 },
      '-=0.4'
    )
    .fromTo('.hero-buttons .btn',
      { y: 20, opacity: 0 },
      { y: 0,  opacity: 1, duration: 0.5, stagger: 0.12 },
      '-=0.3'
    )
    .fromTo('.profile-image',
      { scale: 0.88, opacity: 0 },
      { scale: 1,    opacity: 1, duration: 0.9, ease: 'power2.out' },
      '-=0.8'
    )
    .fromTo('.dot',
      { scale: 0, opacity: 0 },
      { scale: 1, opacity: 1, duration: 0.6, stagger: 0.1, ease: 'back.out(1.7)' },
      '-=0.5'
    );

  /* --- Hero parallax: dots move independently on scroll --- */
  const dotConfigs = [
    { el: '.dot-1', yPercent: -40 },
    { el: '.dot-2', yPercent:  60 },
    { el: '.dot-3', yPercent: -30 },
    { el: '.dot-4', yPercent:  50 },
    { el: '.dot-5', yPercent: -20 },
    { el: '.dot-6', yPercent:  70 },
  ];

  dotConfigs.forEach(({ el, yPercent }) => {
    gsap.to(el, {
      yPercent,
      ease: 'none',
      scrollTrigger: {
        trigger: '.hero',
        start: 'top top',
        end:   'bottom top',
        scrub: 1.5,
      },
    });
  });

  /* --- Hero image subtle parallax --- */
  gsap.to('.hero-image', {
    y: -40,
    ease: 'none',
    scrollTrigger: {
      trigger: '.hero',
      start: 'top top',
      end:   'bottom top',
      scrub: 2,
    },
  });

  /* --- Section reveals --- */
  gsap.utils.toArray('.reveal-section').forEach(section => {
    gsap.fromTo(section,
      { opacity: 0, y: 40 },
      {
        opacity: 1, y: 0, duration: 0.85, ease: 'power2.out',
        scrollTrigger: {
          trigger: section,
          start: 'top 85%',
          toggleActions: 'play none none none',
        },
      }
    );
  });

  /* --- Staggered grid items --- */
  const staggerSelectors = [
    { grid: '.experience-grid',  items: '.experience-card' },
    { grid: '.skills-icon-grid', items: '.skill-icon-item' },
    { grid: '.projects-grid',    items: '.project-card'    },
    { grid: '.about-stats',      items: '.stat'            },
  ];

  staggerSelectors.forEach(({ grid, items }) => {
    document.querySelectorAll(grid).forEach(container => {
      gsap.fromTo(container.querySelectorAll(items),
        { opacity: 0, y: 30 },
        {
          opacity: 1, y: 0, duration: 0.6, stagger: 0.08, ease: 'power2.out',
          scrollTrigger: {
            trigger: container,
            start: 'top 82%',
            toggleActions: 'play none none none',
          },
        }
      );
    });
  });
});
