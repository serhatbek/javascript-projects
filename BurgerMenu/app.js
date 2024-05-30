document.addEventListener('DOMContentLoaded', () => {
  const burgerBtn = document.querySelector('.hamburger-menu');

  const toggleMobileMenu = () => {
    burgerBtn.classList.toggle('hamburger-menu--active');
    /* you can add your mobile menu functionality here */
  };

  if (burgerBtn) {
    burgerBtn.addEventListener('click', toggleMobileMenu);
  }
});
