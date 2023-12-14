window.addEventListener('load', () => {
  const intro = document.querySelector('.intro');
  const introText = document.getElementById('intro-text');
  const bodyBlur = document.querySelector('body::before');
  const header = document.querySelector('header');

  setTimeout(() => {
    introText.style.opacity = '0';
    setTimeout(() => {
      header.style.opacity = '0';
      bodyBlur.style.filter = 'blur(10px)';
      setTimeout(() => {
        intro.style.display = 'none';
        revealSections();
      }, 1000);
    }, 1000);
  }, 5000);
});

function revealSections() {
  const sections = document.querySelectorAll('section');
  sections.forEach((section, index) => {
    section.style.opacity = '0';
    setTimeout(() => {
      section.style.opacity = '1';
    }, 500 * index);
  });
}
