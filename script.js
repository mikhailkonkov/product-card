//Кнопка по покраске фона 1-й карточки

const recolorFirstCardButton = document.getElementById('recolor-first-card-button');
const firstProductCard = document.querySelector('.product-card');
const charcoalHashColor = '#36454F';

recolorFirstCardButton.addEventListener('click',() => {
  firstProductCard.style.backgroundColor = charcoalHashColor;
})

//Кнопка по покраске фона всех карточек

const recolorAllCardButton = document.getElementById('recolor-all-card-button');
const productCards = document.querySelectorAll('.product-card');
const sandHashColor = '#E3BC9A';

recolorAllCardButton.addEventListener('click',() => {
  productCards.forEach(
    card => card.style.backgroundColor = sandHashColor
  )
})

//Кнопка по переходу в Google

const googleOpenButton = document.getElementById('open-google-button');
googleOpenButton.addEventListener('click',openGoogle)

function openGoogle() {
  const answer = confirm('Вы действительно хотите перейти на сайт Google?')

  if(answer === true) {
    window.open('http://google.com')
  }
}

//Вывод текста главного заголовка в консоль при наведении мышью

const mainTitle = document.querySelector('.top-title');

mainTitle.addEventListener('mouseover',() => {
  console.log(mainTitle.textContent)
})

//Смена цвета кнопки при нажатии

const changeColorButton = document.querySelector('.change-color-button')

changeColorButton.addEventListener('click', () => {
  changeColorButton.classList.toggle('active')
})