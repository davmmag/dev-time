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


// Slider
const SLIDER__CONTROLS = document.querySelector('.slider__controls');
const SLIDER__CONTAINER = document.querySelector('.slider__container-inner');
console.log(SLIDER__CONTAINER.scrollWidth)

const toNumber = (str) => {
  if (typeof str === 'number') return str;
  return Number(str.replace('px', ''));
}
const startSlider = (flag, elem ) => {
  const STYLES_ELEM = window.getComputedStyle(elem);
  let REAL_MEANING = STYLES_ELEM.getPropertyValue('--transform') || 0;
  if (flag) {
    SLIDER__CONTAINER.style.setProperty('--transform', `${toNumber(REAL_MEANING) + -135}px`);
  }
  if (flag === false) {
    SLIDER__CONTAINER.style.setProperty('--transform', `${toNumber(REAL_MEANING) + 135}px`);
  }
};

SLIDER__CONTROLS.addEventListener('click', (e) => {
  if (e.target.classList.contains('slider__arrow--left')) {
    startSlider(false, SLIDER__CONTAINER);
  }
  if (e.target.classList.contains('slider__arrow--right')) {
    startSlider(true, SLIDER__CONTAINER);
  }
})