window.addEventListener('load', () => {
  const elements = document.querySelectorAll('.fade-in');
  elements.forEach((el, index) => {
    setTimeout(() => {
      el.style.opacity = 1;
      el.style.transform = 'translateY(0)';
    }, index * 500);
  });
});

document.addEventListener('DOMContentLoaded', () => {
  const loginLink = document.querySelector('.log-in');
  const signupLink = document.querySelector('.sign-up');
  const modal = document.getElementById('modal');
  const closeBtn = document.getElementById('closeBtn');
  const loginForm = document.getElementById('loginForm');
  const signupForm = document.getElementById('signupForm');

  loginLink.onclick = (e) => {
    e.preventDefault();
    modal.classList.remove('hidden');
    loginForm.classList.remove('hidden');
    signupForm.classList.add('hidden');
  };

  signupLink.onclick = (e) => {
    e.preventDefault();
    modal.classList.remove('hidden');
    signupForm.classList.remove('hidden');
    loginForm.classList.add('hidden');
  };

  closeBtn.onclick = () => {
    modal.classList.add('hidden');
    loginForm.classList.add('hidden');
    signupForm.classList.add('hidden');
  };
});
