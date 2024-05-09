const accordionItems = document.querySelectorAll('.accordion__item');

if (accordionItems) {
  accordionItems.forEach((accordion) => {
    accordion.addEventListener('click', (e) => {
      let target = e.currentTarget;

      if (!accordion.classList.contains('active')) {
        accordionItems.forEach((item) => {
          item.classList.remove('active');
        });
        accordion.classList.add('active');
      } else {
        accordion.classList.remove('active');
      }
    });
  });
}
