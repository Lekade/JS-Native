// // Задача 1: Факториал
// // Напишите функцию factorial(n), которая вычисляет факториал числа n рекурсивно.
//5 * 4 * 3 * 2 * 1
// function factorial(n) {
//     if (n === 0) {
//         return 1;
//     } else {
//         return n * factorial(n - 1);
//     }
// }
// console.log(factorial(5)); // 120
// console.log(factorial(0)); // 1
//
//
// // Задача 2: Числа Фибоначчи
// // Напишите функцию fibonacci(n), которая вычисляет n-е число Фибоначчи рекурсивно. Числа Фибоначчи определяются следующим образом:
// //
// // fib(0) = 0
// // fib(1) = 1
// // fib(n) = fib(n-1) + fib(n-2) для n > 1
// function fibonacci(n) {
//     if (n === 0) {
//         return 0;
//     } else if (n === 1) {
//         return 1;
//     } else {
//         return fibonacci(n - 1) + fibonacci(n - 2);
//     }
// }
// console.log(fibonacci(6)); // 8
// console.log(fibonacci(10)); // 55
//
//
// // Задача 3: Обратная строка
// // Напишите функцию reverseString(str), которая рекурсивно переворачивает строку.
// function reverseString(str) {
//     if (str === "") {
//         return "";
//     } else {
//         return reverseString(str.slice(1)) + str[0];
//     }
// }
//
// console.log(reverseString("hello")); // "olleh"
// console.log(reverseString("world")); // "dlrow"
//
//
// // Задача 4: Сумма цифр числа
// // Напишите функцию sumDigits(n), которая рекурсивно вычисляет сумму цифр числа n.
// function sumDigits(n) {
//     let stringN = n.toString()
//     if(stringN === '0'){
//         return 0
//     }else {
//         return sumDigits(+(stringN.slice(1))) + (+stringN[0])
//     }
// }
// function sumDigits(n) {
//     if (n === 0) {
//         return 0;
//     } else {
//         return (n % 10) + sumDigits(Math.floor(n / 10));
//     }
// }
//
// console.log(sumDigits(1234)); // 10
// console.log(sumDigits(987));  // 24
// console.log(sumDigits(0));    // 0
// console.log(sumDigits(5));    // 5
//
//
// // Задача 5: Поиск максимального элемента в массиве
// // Напишите функцию findMax(arr), которая рекурсивно находит максимальный элемент в массиве arr.
// function findMax(arr) {
//     let [n1, n2, ...newArr] = arr
//     if (arr.length === 0) {
//         return []
//     } else if (arr.length === 1) {
//         return arr[0]
//     } else if (arr[0] > arr[1] && arr.length > 1) {
//         return findMax([n1, ...newArr])
//     } else {
//         return findMax([n2, ...newArr])
//     }
// }

// function findMax(arr) {
//     if (arr.length === 0) {
//         return -Infinity; // Возвращаем отрицательную бесконечность для пустого массива
//     } else if (arr.length === 1) {
//         return arr[0]; // Возвращаем единственный элемент
//     } else {
//         const restMax = findMax(arr.slice(1)); // Находим максимум в оставшейся части массива
//         return arr[0] > restMax ? arr[0] : restMax; // Сравниваем первый элемент с максимумом оставшейся части
//     }
// }
//
// console.log(findMax([1, 5, 3, 9, 2])); // 9
// console.log(findMax([10, 20, 30, 40, 50])); // 50