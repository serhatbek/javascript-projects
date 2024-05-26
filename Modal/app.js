document.addEventListener('DOMContentLoaded', () => {
  const modal = document.querySelector('.js-modal');
  const showModalBtn = document.querySelector('.js-show-modal');
  const closeModalBtns = document.querySelectorAll('.js-close-modal');

  const closeModal = () => {
    modal.classList.remove('modal--opened');
  };

  const showModal = () => {
    modal.classList.add('modal--opened');
  };

  if (modal) {
    showModalBtn.addEventListener('click', showModal);
    closeModalBtns.forEach((btn) => btn.addEventListener('click', closeModal));
  }

  document.addEventListener('click', (event) => {
    if (
      modal.classList.contains('modal--opened') &&
      !event.target.closest('.modal__content') &&
      !event.target.closest('.js-show-modal')
    ) {
      closeModal();
    }
  });
});
