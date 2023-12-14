function revealSections() {
  const sections = document.querySelectorAll('section');
  sections.forEach((section, index) => {
    section.style.opacity = '0';
    setTimeout(() => {
      section.style.opacity = '1';
    }, 500 * index);
  });
}

window.addEventListener('load', revealSections);
