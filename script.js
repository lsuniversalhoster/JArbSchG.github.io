function revealSectionsOnLoad() {
  const sections = document.querySelectorAll('section');
  const screenHeight = window.innerHeight;

  sections.forEach((section, index) => {
    const topPosition = section.getBoundingClientRect().top + window.scrollY;

    if (topPosition < screenHeight) {
      section.style.opacity = '0';
      section.style.transform = 'translateY(50px)';
    } else {
      section.style.opacity = '0';
      section.style.transform = 'translateY(100px)';
    }

    section.style.transition = 'opacity 1s ease, transform 1s ease';

    setTimeout(() => {
      section.style.opacity = '1';
      section.style.transform = 'none';
    }, 500 * index);
  });
}

if (!sessionStorage.getItem('hasVisited')) {
  window.addEventListener('load', () => {
    revealSectionsOnLoad();
    sessionStorage.setItem('hasVisited', true);
  });
}
