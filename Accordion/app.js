const accordionItems = document.querySelectorAll('.accordion__item');

if (accordionItems) {
  accordionItems.forEach((accordion) => {
    accordion.addEventListener('click', (e) => toggleAccordion(e));
  });
}

const toggleAccordion = (e) => {
  let target = e.currentTarget;

  if (!target.classList.contains('active')) {
    accordionItems.forEach((item) => {
      item.classList.remove('active');
    });
    target.classList.add('active');
  } else {
    target.classList.remove('active');
  }
};
