import './styles/style.scss';

const NAV = document.querySelector('[data-nav]');
const BURGER = document.querySelector('[data-burger]');
console.log(NAV, BURGER)
const toggleBurger = () => BURGER.classList.toggle('burger-btn--active');

const toggleMenu = () => {
  NAV.classList.toggle('menu--active');
  toggleBurger();
};



const closeMenu = (e) => {
  if (e.target.classList.contains('menu__link')) {
    toggleMenu();
    toggleBurger();
  }
}

BURGER.addEventListener('click', toggleMenu);
NAV.addEventListener('click', closeMenu);