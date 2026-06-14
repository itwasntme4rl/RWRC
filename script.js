// Mobile Menu
const menuBtn = document.getElementById('menuBtn');
const navLinks = document.getElementById('navLinks');
if (menuBtn) menuBtn.onclick = () => navLinks.classList.toggle('show');

// Form Handling for FormSubmit
const form = document.getElementById('estimateForm');
const formNote = document.getElementById('formNote');

if (form) {
    form.addEventListener('submit', () => {
        // Show success message
        formNote.textContent = 'Thank you! We will contact you soon.';
        formNote.style.color = '#28a745';
        
        // Do NOT preventDefault - let FormSubmit handle sending the email
    });
}
