// 3.
import { productCards } from "./productcards.js";
const productCardTemplate = document.getElementById("product-card-template");
const productCardWrapper = document.querySelector(".product-card-wrapper");

function renderProductCard(cards) {
  productCardWrapper.innerHTML = "";

  cards.forEach(productCard => {
    const productCardClone = productCardTemplate.content.cloneNode(true);

    productCardClone.querySelector(".product-card__img").src = productCard.imgSrc;
    productCardClone.querySelector(".product-card__img").alt = productCard.title;
    productCardClone.querySelector(".product-card__for-skin").textContent = productCard.forSkin;
    productCardClone.querySelector(".product-card__title").textContent = productCard.title;

    const compositionList = productCardClone.querySelector(".product-card__composition");

    productCard.composition.forEach(item => {
      const li = document.createElement('li');
      li.classList.add('product-card__item'); 
      li.setAttribute('type', 'circle'); 
      li.textContent = item;
      
      compositionList.append(li);
    });

    productCardClone.querySelector(".product-card__price").textContent = `${productCard.price} ₽`;
    productCardWrapper.append(productCardClone);
  });
}

// 4.
const productCardsTitleAndDesc = productCards.reduce((acc, el) => {
  return [...acc, { [el.title]: el.description }];
}, []);

console.log(productCardsTitleAndDesc);

// 5.
function getCardsCount() {
  let count;

  while (isNaN(count) || count < 1 || count > 5) {
    const input = prompt("Сколько карточек отобразить? От 1 до 5");
    
    if (input === null) {
      return 0; 
    }

    count = parseInt(input);

    if (isNaN(count) || count < 1 || count > 5) {
      alert("Ой, тут какая-то ошибка в вводе! Пожалуйста, введите число от 1 до 5.");
    }
  }

  return count;
}

const userCount = getCardsCount();

if (userCount > 0) {
  const slicedCards = productCards.slice(0, userCount);
  renderProductCard(slicedCards);
}

