document.addEventListener('DOMContentLoaded', () => {
  /* Smooth scroll for #anchors */
  document.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener('click', e => {
      const href = link.getAttribute('href');
      if (!href || href === '#') return;

      const target = document.querySelector(href);
      if (target) {
        e.preventDefault();
        target.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      }
    });
  });

  /* Scroll reveal: header, products, footer columns */
  const toAnimate = document.querySelectorAll(
    '.catalog-header, .product, .footer__brand, .footer__column'
  );

  toAnimate.forEach(el => el.classList.add('animate-on-scroll'));

  if ('IntersectionObserver' in window) {
    const observer = new IntersectionObserver(
      (entries, obs) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            obs.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15 }
    );

    toAnimate.forEach(el => observer.observe(el));
  } else {
    // fallback
    toAnimate.forEach(el => el.classList.add('is-visible'));
  }
});
