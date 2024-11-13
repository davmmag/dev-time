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


// Cards
// Получить данные
// Обработать данные
// функция создания блока
// 
let URL = './json/gifts.json';
// const getData = async (address) => {
//   try {
//     const response = await fetch(address);
    
//     if (response.ok) {
//       return response;
//     }
//   } catch(err) {
//     console.log(err);
//   }
// };


// getData(cardsAddress).then(data => (data.json());

const getCards = async (url) => {
  try {
    const RESPONSE = await fetch(url);
    if (RESPONSE.ok) {
      let data = await RESPONSE.json();
      return data;
    }
  } catch (e) {
    console.log(e)
  }
};

// const DATA = getCards(URL);
// DATA.then(data => console.log(data))
const cardImage = {
  health: '',
  harmony: '',
  health: '',
}

const createElement = (className, type = 'div', text) => {
  const element = document.createElement(type);
  element.className = className;
  if (text) element.textContent = text;
  return element;
}

const createCardImg = () => {

}

const createCard = (data) => {
  const { name, description, category, superpowers } = data;
  const card = createElement('card');
  const categoryElement = createElement('card__category', 'p', category);
  const nameElement = createElement('card__title', 'h3', name);
  const imgElement = createElement('');
  card.append(categoryElement, nameElement);
  return card;
};

const createCardList = (data) => {
  const cardList = document.querySelector('[data-card-list]');
  
  for (const item of data) {
    cardList.append(createCard(item))
  }
}

getCards(URL).then(data => createCardList(data));