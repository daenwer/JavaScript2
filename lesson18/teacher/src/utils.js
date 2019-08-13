
import { isNumber } from "util";

/**
  1. Проверка на число  - isNaN()
  2. Проверка на четное число
  3. Проверка на положительное число
  4. Проверка на целое число
  5. Проверка на простое число
  6. Функция, которая находит число в массиве строк["фраза", "фраза", 2, "фраза", "фраза"]
 */

// 1 
function isNumber(number) {
  return !Number.isNaN(+number);
}

// 2
function isEven(number) {
  return number % 2 === 0;
}

// 3
function isPositive(number) {
  return number > 0;
}

// 4
// Math.floor(); // округление в меньшую сторону
// Math.ceil(); // округление в большую сторону
// Math.round(); // округление по пр-м математики
function isInteger(number) {
  // return number === Math.floor(number);
  return number % 1 === 0;
}

// 5
function isPrime(number) { // 11
  for (let i = 2; i < Math.sqrt(number); i++) {
    if (number % i === 0) {
      return false;
    }
  }

  return true;
}

function searchNumberInArr(array) {
  for (let i = 0; i < array.length; i++) {
    if (isNumber(array[i])) {
      return array[i];
    }
  }

  return null;
}