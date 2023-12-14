function revealPageOnLoad() {
  const elements = document.querySelectorAll('body > *');

  elements.forEach((element, index) => {
    const topPosition = element.getBoundingClientRect().top + window.scrollY;
    const screenHeight = window.innerHeight;

    if (topPosition < screenHeight) {
      element.style.opacity = '0';
      element.style.transform = 'translateY(50px)';
    } else {
      element.style.opacity = '0';
      element.style.transform = 'translateY(100px)';
    }

    element.style.transition = 'opacity 1s ease, transform 1s ease';

    setTimeout(() => {
      element.style.opacity = '1';
      element.style.transform = 'none';
    }, 500 * index);
  });
}

window.addEventListener('load', () => {
  revealPageOnLoad();
});
