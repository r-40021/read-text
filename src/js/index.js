import '../sass/index.scss';

document.addEventListener('DOMContentLoaded', () => {
  if (!'speechSynthesis' in window) {
    document.getElementById('unavailable').checked = true;
  }

  const form = document.getElementById('textForm');
  const text = document.getElementById('text');

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const uttr = new SpeechSynthesisUtterance(text.value);
    speechSynthesis.cancel();
    speechSynthesis.speak(uttr);
    text.value = null;
  })
})