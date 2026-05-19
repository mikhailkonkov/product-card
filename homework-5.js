// 5.1 Создание функции с двумя параметрами и выводом сообщения в консоль
function showWeather(city, temperature) {
  console.log(`Сейчас в ${city} температура — ${temperature} градусов по Цельсию`);
};

showWeather('Москве', 20);

// 5.2 Создание функции с одной переменной и выводом в консоль сообщения при значении больше, меньше или равно
const SPEED_OF_LIGHT = 299792458;
function checkSpeed(speed) {
  if (speed > SPEED_OF_LIGHT) {
    console.log("Сверхсветовая скорость");
  } else if (speed < SPEED_OF_LIGHT) {
    console.log ("Субсветовая скорость");
  } else {
    console.log ("Скорость света");
  }
};

checkSpeed(299792458);

// 5.3 Создание функции по расчету стоимости для приобретения товара
const productName = 'Macbook Air';
const productPrice = 1099;
function buyProduct(budget) {
  if (budget >= productPrice) {
    console.log(`${productName} приобретен. Спасибо за покупку!`);
  } else {
    const diff = productPrice - budget;
    console.log(`Вам не хватает ${diff}$, пополните баланс`);
  }
};

buyProduct(900);

// 5.4(1) Наименования тестовых переменных
const DIAMETER_EARTH = 12742;
const brandName = 'BLATOSPHERA';
let deliveryPrice = 300;

// 5.4(2) Создание функции по расчету стоимости доставки
function calculateShippingCost(distance, weight, volume) {
  let basicCost = 500;
  if (distance > 1000) {
    basicCost += distance * 5;
  } if (weight > 30) {
    basicCost += 1000;
  } if (volume > 100) {
    basicCost += 500;
  }
  return basicCost;
};

  const result = calculateShippingCost(1600, 50, 120);
  console.log(result);
