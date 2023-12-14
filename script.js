// Intro-Effekt
window.addEventListener('load', () => {
  const intro = document.querySelector('.intro');
  const introText = document.getElementById('intro-text');
  const bodyBlur = document.querySelector('body::before');

  setTimeout(() => {
    introText.style.transform = 'scale(1)';
  }, 500);

  setTimeout(() => {
    bodyBlur.style.filter = 'blur(0)';
    intro.style.opacity = '0';
    setTimeout(() => {
      intro.style.display = 'none';
    }, 1000);
  }, 2500);
});

// Aufbaueffekt für die Abschnitte
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
