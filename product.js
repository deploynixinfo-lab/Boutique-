// GSAP: Animate cards on page load
window.addEventListener('DOMContentLoaded', () => {
  gsap.from('.product-card', {
    opacity: 0,
    y: 40,
    duration: 0.7,
    stagger: 0.12,
    ease: 'power2.out'
  });

  // GSAP: Scale image on hover
  document.querySelectorAll('.product-card').forEach(card => {
    const img = card.querySelector('.product-image img');
    card.addEventListener('mouseenter', () => {
      gsap.to(img, { scale: 1.07, duration: 0.35, ease: 'power2.out' });
    });
    card.addEventListener('mouseleave', () => {
      gsap.to(img, { scale: 1, duration: 0.35, ease: 'power2.out' });
    });
  });
});