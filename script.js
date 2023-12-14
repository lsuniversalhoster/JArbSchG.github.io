function typeWriter(textElement, text, speed) {
  let i = 0;
  if (textElement) {
    function type() {
      if (i < text.length) {
        textElement.innerHTML += text.charAt(i);
        i++;
        setTimeout(type, speed);
      }
    }
    type();
  }
}

const purposeText = document.querySelector('#purpose .section-content p');
const purpose = "Das JArbSchG dient dem Schutz von Jugendlichen...";
typeWriter(purposeText, purpose, 50);
