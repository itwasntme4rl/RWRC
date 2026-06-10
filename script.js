const menuBtn = document.getElementById('menuBtn');
const navLinks = document.getElementById('navLinks');
const estimateForm = document.getElementById('estimateForm');
const formNote = document.getElementById('formNote');

menuBtn.addEventListener('click', () => {
  navLinks.classList.toggle('show');
});

navLinks.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => navLinks.classList.remove('show'));
});

estimateForm.addEventListener('submit', (event) => {
  event.preventDefault();

  const data = new FormData(estimateForm);
  const name = data.get('name');
  const phone = data.get('phone');
  const city = data.get('city') || 'Not provided';
  const service = data.get('service');
  const message = data.get('message') || 'No extra message.';

  const subject = encodeURIComponent(`Roofing Estimate Request - ${name}`);
  const body = encodeURIComponent(
`New estimate request:\n\nName: ${name}\nPhone: ${phone}\nCity/Area: ${city}\nService Needed: ${service}\n\nMessage:\n${message}`
  );

  window.location.href = `mailto:realworldroofingconstruction@gmail.com?subject=${subject}&body=${body}`;
  formNote.textContent = 'Opening your email app with the estimate request. Later this can be connected to a real form system.';
});
