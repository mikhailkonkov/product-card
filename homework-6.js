// Объект с личными данными
const userData = {
  name: "Михаил",
  surname: "Коньков",
  age: 26,
  country: "Россия",
  city: "Москва",
  relationshipStatus:"Холост",
  drivingExperience: "5 лет",
  mail: "mkonsmm@gmail.com",
  phoneNumber: "89801992932"
};

// Объект с информацией о автомобиле
const carInfo = {
  brand: "Land Rover",
  model: "Rang Rover Sport",
  yearProduction: 2025,
  color: "Black",
  bodyStyle: "5-door SUV",
  
};
carInfo.owner = userData;
console.log(carInfo);

// Функция проверяющая наличие свойства "Максимальная скорость"
function checkMaxSpeed (car) {
  if(!("maxSpeed" in car)) {
    carInfo.maxSpeed = 280;
  }
}

checkMaxSpeed(carInfo);
console.log(carInfo.maxSpeed);

// Универсальная функция которое находит любое значение любого свойства в любом объекте 
function getInfoUser (allInfoUser, specificInformation) {
  let info = allInfoUser[specificInformation];
  console.log(info);
}

getInfoUser(userData, 'mail');

// Массив со списком продуктов
const listProducts = ["молоко", "сыр", "макароны", "огурцы"];

// Массив состоящий из нескольких объектов. Метод добавления объекта в массив.
const bookShelf = [
  {
    title: "Источник",
    author: "Айн Рэнд",
    year: 1943,
    cover: "белый",
    genre: "роман"
  },
  {
    title:"Атлант расправил плечи",
    author: "Айн Рэнд",
    year: 1957,
    cover: "синий",
    genre: "антиутопия"
  },
  {
    title: "Мы",
    author: "Евгений Замятин",
    year: 1920,
    cover: "серый",
    genre: "антиутопия"
  },
];

bookShelf.push({
  title: "Маркетинг от А до Я",
  author: "Филипп Котлер",
  year: 2003,
  cover: "синий",
  genre: "бизнес-литература"
});

console.log(bookShelf);

// Объединение массивов
const talebBooks = [
  {
    title: "Одураченные случайностью",
    author: "Нассим Талеб",
    year: 2001,
    cover: "зеленый",
    genre: "философия"
  },
  {
    title: "Черный лебедь",
    author: "Нассим Талеб",
    year: 2007,
    cover: "черный",
    genre: "философия"
  },
  {
    title: "Антихрупкость",
    author: "Нассим Талеб",
    year: 2012,
    cover: "красный",
    genre: "философия"
  }
];

const allBooks = [...bookShelf, ...talebBooks];
console.log(allBooks);

//Функция с использованием метода map
const booksWithRare = allBooks.map(book => {
  return {
    ...book,
    isRare: book.year < 2000
  };
});

console.log(booksWithRare);