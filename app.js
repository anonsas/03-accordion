const accordionElements = document.querySelectorAll('.accordion');

accordionElements.forEach((accordion) => {
  accordion.addEventListener('click', () => {
    if (accordion.classList.contains('active')) {
      accordion.classList.toggle('active');
    } else {
      document
        .querySelectorAll('.accordion')
        .forEach((accordion) => accordion.classList.remove('active'));

      accordion.classList.add('active');
    }
  });
});
