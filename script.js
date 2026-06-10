const menuBtn = document.getElementById('menuBtn');
const navLinks = document.getElementById('navLinks');
const form = document.getElementById('estimateForm');
const formNote = document.getElementById('formNote');

menuBtn.addEventListener('click', () => {
  navLinks.classList.toggle('show');
});

navLinks.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => navLinks.classList.remove('show'));
});

form.addEventListener('submit', () => {
  formNote.textContent = 'Sending your request...';
});