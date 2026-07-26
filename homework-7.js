
//ДЗ 7

import { comments } from "./comments.js";

// 1. Фильтрация массива 

// Сначала, чтобы получить массив, начиная с 5, решил обрезать его.

// const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// const numbersFiveTen = numbers.slice(4, 10);
// console.log(numbersFiveTen);

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const numberFiveTen = numbers.filter(number => number >= 5);
console.log(numberFiveTen);

// 2. Массив строк и проверка наличия определенной сущности

const clothingBrands = ["Trikko", "FTP", "KITH", "Blatosphera", "Deen Athletic", "C.P. Company", "Stone Island"];
const searchKith = clothingBrands.includes("KITH");
console.log(searchKith);

// 3. Функция, которая переворачивает массив и ее применение

function reverseArray(arr) {
  return arr.reverse()
}

const reversNumbers = reverseArray(numbers);
const reversClothingBrands = reverseArray(clothingBrands);

console.log(reversNumbers);
console.log(reversClothingBrands);

// 4. Вывод в консоль массив тех комментариев, почта пользователей которых содержит ".com"
const domensCom = comments.filter(comment => comment.email.includes('.com'));
console.log(domensCom);

// 5.
const updatedComments = comments.map(comment => {
  return {...comment, postId: comment.id <= 5 ? 2 : 1}
});
console.log(updatedComments);

// 6. 
const shortComments = comments.map(comment => {
  return {
    id: comment.id,
    name: comment.name
  };
});
console.log(shortComments);

// 7
const validComments = comments.map(comment => {
  return { 
    ...comment, 
    isInvalid: comment.body.length > 180 
  };
});
console.log(validComments);

// 8.
const emailsMap = comments.map(comment => {
  return comment.email;
});

console.log(emailsMap);

const emailsReduce = comments.reduce((acc, comment) => {
  return [...acc, comment.email];
}, []);
console.log(emailsReduce);

// 9.
const emailsString = emailsMap.join(", ");
console.log(emailsString);

const emailsString2 = emailsMap.toString();
console.log(emailsString2);
