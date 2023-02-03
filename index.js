// ЗАДАЧИ ПО ПРОГРАММИРОВАНИЮ 
// Также, чтобы понимать, что у вас есть минимальные навыки программирования, необходимо решить несколько задач по программированию.
// Вы можете использовать для их решения любой комфортный вам язык. В качестве решения достаточно выслать текстовый файл с кодом написанных функции/методов.
// ВАЖНО! Укажите рядом с каждой задачей время, которое вы потратили на ее выполнение.

// В качестве языка программирования использую JavaScript.

// Задача 1
// Написать метод/функцию, который/которая на вход принимает массив городов. В качестве результата возвращает строку, где города разделены запятыми, а в конце стоит точка. 
// Пример:
// «Москва, Санкт-Петербург, Воронеж.» 

// Решение - 1 минута, запись - ещё 5 минут. Итого 5-6 минут.

const convertArrToString = (arrCities) => {
  const stringCities = arrCities.join(',');
  const result = stringCities + '.'

  return result;
};

convertArrToString(['Москва', 'Санкт-Петербург', 'Воронеж']);

// Задача 2
// Написать метод/функцию, который/которая на вход принимает число (float), а на выходе получает число, округленное до пятерок.
// Пример:
// 27 => 25, 27.8 => 30, 41.7 => 40.

// Решение - 3 минутs, запись - 5 минут. Итого 7 минут.

const roundToNearest5 = (float) => {
  const result = Math.round(float / 5) * 5;

  return result;
};

roundToNearest5(27.8);

// Задача 3
// Написать метод/функцию, который/которая на вход принимает число (int), а на выходе выдает слово “компьютер” в падеже, соответствующем указанному количеству. Например, «25 компьютеров», «41 компьютер», «1048 компьютеров».

// Решение - 5 минутs, запись - 10 минут. Итого 15 минут.

const convertStringToCorrectResult = (number) => {
  const stringOne = 'компьютер';
  const stringTwo = 'компьютера';
  const stringThree = 'компьютеров';

  const arrNumbers = String(number).split('');

  const endNumber = +arrNumbers[arrNumbers.length - 1];
  const preEndNumber = +arrNumbers[arrNumbers.length - 2];

  let result = `${String(number)} `;

  if (endNumber === 1 && preEndNumber !== 1) {
    result += stringOne;
  } else if (endNumber >= 2 &&  endNumber <= 4 && preEndNumber !== 1) {
    result += stringTwo;
  } else {
    result += stringThree;
  }

  return result;
};

convertStringToCorrectResult(1048);

// Задача 4
// Написать метод/функцию, который/которая на вход принимает целое число, а на выходе возвращает то, является ли число простым (не имеет делителей кроме 1 и самого себя).

// Решение - 5 минутs, запись - 10 минут. Итого 15 минут.

const checkNumberOnSimple = (number) => {
  let result = true;

  for (let i = 2; i < 9; i++) {
    if (number % i === 0 && number !== i) {
      result = false;
    }
  };

  return result;
};

checkNumberOnSimple(199);

// Задача 5
// Написать метод, который определяет, какие элементы присутствуют в двух экземплярах в каждом из массивов (= в двух и более, причем в каждом). На вход подаются два массива. На выходе массив с необходимыми совпадениями.
// Пример:
// [7, 17, 1, 9, 1, 17, 56, 56, 23], [56, 17, 17, 1, 23, 34, 23, 1, 8, 1]
// На выходе [1, 17]

// Решение - 5 минутs, запись - 15 минут. Итого 20 минут.

const checkMatchNumbersOnArrays = (arrNumbersOne, arrNumbersTwo) => {
  const result = [];
  const matchNumbersArrOne = [];
  const matchNumbersArrTwo = [];

  arrNumbersOne.sort((a, b) => a - b);
  arrNumbersTwo.sort((a, b) => a - b);

  const copyArrNumbersOne = [...arrNumbersOne];
  const copyArrNumbersTwo = [...arrNumbersTwo];

  arrNumbersOne.forEach(element => {
    copyArrNumbersOne.shift();

    if (copyArrNumbersOne.includes(element) && !matchNumbersArrOne.includes(element)) {
      matchNumbersArrOne.push(element);
    }
  });

  arrNumbersTwo.forEach(element => {
    copyArrNumbersTwo.shift();

    if (copyArrNumbersTwo.includes(element) && !matchNumbersArrTwo.includes(element)) {
      matchNumbersArrTwo.push(element);
    }
  });
  
  matchNumbersArrOne.forEach(element => {
    if (matchNumbersArrTwo.includes(element)) {
      result.push(element);
    }
  });

  return result;
};

checkMatchNumbersOnArrays([7, 17, 1, 9, 1, 17, 56, 56, 23], [56, 17, 17, 1, 23, 34, 23, 1, 8, 1]);

// Задача 6
// Написать метод, который в консоль выводит таблицу умножения. На вход метод получает число, до которого выводит таблицу умножения. В консоли должна появиться таблица. Например, если на вход пришло число 5, то получим:

// Решение - 15 минутs, запись - 15 минут. Итого 30 минут.

const outputToConsoleMultiplicationTable = (number) => {
  let numbersToConsole = [];
  const maxLengthNumber = number > 9 ? String(number * number).length + 1 : String(number * number).length; 

  for (let y = 0; y <= number; y++) {
    if (y === 0) {
      for (let xOne = 0; xOne <= number; xOne++) {
        if (xOne) {
          numbersToConsole.push(' '.repeat((maxLengthNumber - String(xOne).length)));
          numbersToConsole.push(xOne);
        } else {
          numbersToConsole.push(' '.repeat((maxLengthNumber - String(xOne).length)));
        }
      }; 

      console.log(numbersToConsole.join(' '));
      numbersToConsole = [];
    } else {
      numbersToConsole.push(' '.repeat((maxLengthNumber - String(y).length -1)));
      numbersToConsole.push(y);
      
      for (let x = 1; x <= number; x++) {
        if (x === 1) {
          numbersToConsole.push(' '.repeat((maxLengthNumber - String(x * y).length - 1)));
          numbersToConsole.push(x * y);
        } else {
          numbersToConsole.push(' '.repeat((maxLengthNumber - String(x * y).length)));
          numbersToConsole.push(x * y);
        }
      };

      console.log(numbersToConsole.join(' '));
      numbersToConsole = [];
    }
  };
};

outputToConsoleMultiplicationTable(5);

// Важно: 
// В последней строке между числами ровно по одному пробелу должно выводиться. 
// В каждом столбце числа должны быть выровнены по правому краю.
