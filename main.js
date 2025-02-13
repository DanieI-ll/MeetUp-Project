window.addEventListener('load', () => {
  const elements = document.querySelectorAll('.fade-in');
  elements.forEach((el, index) => {
    setTimeout(() => {
      el.style.opacity = 1;
      el.style.transform = 'translateY(0)';
    }, index * 500);
  });
});
