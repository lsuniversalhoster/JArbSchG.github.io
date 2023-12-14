function revealSectionsSmooth() {
  const sections = document.querySelectorAll('section');
  sections.forEach(section => {
    section.style.opacity = '0';
    section.style.transform = 'scale(0.9)';
  });

  let delay = 0;
  sections.forEach(section => {
    setTimeout(() => {
      section.style.opacity = '1';
      section.style.transform = 'scale(1)';
    }, delay);
    delay += 100;
  });
}

window.addEventListener('load', revealSectionsSmooth);
