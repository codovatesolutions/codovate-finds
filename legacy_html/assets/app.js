const menuBtn = document.querySelector('[data-menu]');
const navLinks = document.querySelector('.nav-links');
if (menuBtn && navLinks) menuBtn.addEventListener('click', () => navLinks.classList.toggle('open'));

const year = document.querySelector('[data-year]');
if (year) year.textContent = new Date().getFullYear();

const filters = document.querySelectorAll('[data-filter]');
const cards = document.querySelectorAll('[data-category]');
filters.forEach(btn => btn.addEventListener('click', () => {
  filters.forEach(b => b.classList.remove('active'));
  btn.classList.add('active');
  const f = btn.dataset.filter;
  cards.forEach(card => card.classList.toggle('hide', f !== 'all' && card.dataset.category !== f));
}));

const search = document.querySelector('[data-search]');
if (search) search.addEventListener('input', e => {
  const q = e.target.value.toLowerCase().trim();
  cards.forEach(card => card.classList.toggle('hide', q && !card.innerText.toLowerCase().includes(q)));
});

const contactForm = document.querySelector('#contactForm');
if (contactForm) {
  contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const name = encodeURIComponent(document.querySelector('#name').value.trim());
    const email = encodeURIComponent(document.querySelector('#email').value.trim());
    const message = encodeURIComponent(document.querySelector('#message').value.trim());
    location.href = `mailto:hello@codovatesolutions.in?subject=Codovate Finds enquiry from ${name}&body=Email: ${email}%0D%0A%0D%0A${message}`;
  });
}
