import '../sass/index.scss';

document.addEventListener('DOMContentLoaded', () => {
  if (!'speechSynthesis' in window) {
    document.getElementById('unavailable').checked = true;
  }

  const form = document.getElementById('textForm');
  const text = document.getElementById('text');

  form.addEventListener('submit', (e) => {
    if (!text.value) return;
    e.preventDefault();
    const uttr = new SpeechSynthesisUtterance(text.value);
    speechSynthesis.speak(uttr);
    text.value = null;
    text.focus();
  })
})