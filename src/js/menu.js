const head = document.getElementById('head');
const openBtn = document.getElementById('openMenu');
const closeBtn = document.getElementById('closeMenu');
const menuBg = document.getElementById('menuBg');
const menu = document.getElementById('menu');
const contactBtn = document.getElementById('contactBtn');
const logo = document.querySelector('.head-logo__icon');
const body = document.querySelector('body');

const elements = document.querySelectorAll('.head-nav__link, .head-btn');
elements.forEach(el => el.addEventListener('click', event => closeMenu()));

openBtn.addEventListener('click', () => openMenu());
closeBtn.addEventListener('click', () => closeMenu());

const openMenu = () => {
  head.classList.add('open');
  logo.style.fill = '#ffffff';
  openBtn.classList.add('hidden');
  closeBtn.classList.remove('hidden');
  menuBg.classList.add('open');
  body.classList.add('modal-open');
  setTimeout(() => {
    menu.classList.add('open');
    contactBtn.classList.add('open');
  }, 500);
};

const closeMenu = () => {
  head.classList.remove('open');
  logo.style.fill = '';
  openBtn.classList.remove('hidden');
  closeBtn.classList.add('hidden');
  menuBg.classList.remove('open');
  body.classList.remove('modal-open');
  menu.classList.remove('open');
  contactBtn.classList.remove('open');
};
