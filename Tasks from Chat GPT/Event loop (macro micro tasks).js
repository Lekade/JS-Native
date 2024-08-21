//Задача 1: Макро- и микротаски -------------------------------------

// console.log(1);
//
// setTimeout(() => {
//   console.log(2);
// }, 0);
//
// Promise.resolve().then(() => {
//   console.log(3);
// });
//
// console.log(4);

//1 4 3 2

// Задача 2: Очередность выполнения -------------------------------------

// console.log(1);
//
// setTimeout(() => {
//   console.log(2);
// }, 0);
//
// setTimeout(() => {
//   console.log(3);
// }, 0);
//
// Promise.resolve().then(() => {
//   console.log(4);
// }).then(() => {
//   console.log(5);
// });
//
// console.log(6);

//1 6 4 5 2 3

// Задача 3: Промисы и setTimeout -------------------------------------

// setTimeout(() => {
//   console.log(1);
// }, 0);
//
// Promise.resolve().then(() => {
//   console.log(2);
// }).then(() => {
//   console.log(3);
// });
//
// console.log(4);

//4 2 3 1

// Задача 4: Несколько Promise и setTimeout -------------------------------------

// console.log(1);
//
// setTimeout(() => {
//   console.log(2);
// }, 0);
//
// setTimeout(() => {
//   console.log(3);
// }, 0);
//
// Promise.resolve().then(() => {
//   console.log(4);
// }).then(() => {
//   console.log(5);
// });
//
// Promise.resolve().then(() => {
//   console.log(6);
// }).then(() => {
//   console.log(7);
// });
//
// console.log(8);

//1 8 4 6 5 7 2 3

// Задача 5: Вложенные setTimeout и Promise -------------------------------------

// setTimeout(() => {
//   console.log(1);
//
//   Promise.resolve().then(() => {
//     console.log(2);
//   });
//
// }, 0);
//
// setTimeout(() => {
//   console.log(3);
// }, 0);
//
// Promise.resolve().then(() => {
//   console.log(4);
// });
//
// console.log(5);

//5 4 1 2 3

// Задача 6: Асинхронные функции -------------------------------------

// async function asyncFunction() {
//   console.log(1);
//
//   await Promise.resolve().then(() => {
//     console.log(2);
//   });
//
//   console.log(3);
// }
//
// console.log(4);
// asyncFunction();
// console.log(5);

//4 1 5 2 3

// Задача 7: Комбинация макро- и микротасок -------------------------------------

// setTimeout(() => {
//   console.log(1);
//   setTimeout(() => {
//     console.log(2);
//   }, 0);
// }, 0);
//
// Promise.resolve().then(() => {
//   console.log(3);
//   Promise.resolve().then(() => {
//     console.log(4);
//   });
// });
//
// console.log(5);

// 5 3 4 1 2

// Задача 8: Последовательность async/await -------------------------------------

// async function asyncFunction() {
//   console.log(1);
//
//   await new Promise(resolve => setTimeout(resolve, 0));
//   console.log(2);
// }
//
// console.log(3);
// asyncFunction();
// console.log(4);

//3 1 4 2

// Задача 9: Использование process.nextTick -------------------------------------

// console.log(1);
//
// process.nextTick(() => {
//   console.log(2);
// });
//
// setTimeout(() => {
//   console.log(3);
// }, 0);
//
// Promise.resolve().then(() => {
//   console.log(4);
// });
//
// console.log(5);

//1 5 2 4 3

// Задача 10: Порядок микротасок -------------------------------------

// Promise.resolve().then(() => {
//   console.log(1);
// });
//
// process.nextTick(() => {
//   console.log(2);
// });
//
// Promise.resolve().then(() => {
//   console.log(3);
// });
//
// process.nextTick(() => {
//   console.log(4);
// });
//
// console.log(5);

// 5 2 4 1 3

// Задача 11: Асинхронная рекурсия -------------------------------------

// setTimeout(function timeout() {
//     console.log(1);
//     setTimeout(timeout, 1000);
// }, 1000);
//
// Promise.resolve().then(function promise() {
//     console.log(2);
//     Promise.resolve().then(promise);
// });

// 2 2 2 2 2 ... не доходит очередь до macro

// Задача 12: Вложенные таймеры -------------------------------------

// setTimeout(() => {
//     console.log(1);
//
//     setTimeout(() => {
//         console.log(2);
//     }, 0);
// }, 0);
//
// Promise.resolve().then(() => {
//     console.log(3);
// });

//3 1 2

// Задача 13: Асинхронные действия в цикле -------------------------------------

// for (let i = 0; i < 3; i++) {
//     setTimeout(() => console.log(1 + i), 0);
//     Promise.resolve().then(() => console.log(4 + i));
// }

//4 5 6 1 2 3

// Задача 14: Очередь макро- и микротасок -------------------------------------

// setTimeout(() => console.log(1), 0);
// Promise.resolve().then(() => console.log(2));
// Promise.resolve().then(() => console.log(3));
// console.log(4);

//4 2 3 1

// Задача 15: Вложенные промисы -------------------------------------

// Promise.resolve().then(() => {
//     console.log(1);
//     return Promise.resolve().then(() => {
//         console.log(2);
//     });
// }).then(() => {
//     console.log(3);
// });

//1 2 3

// Задача 16: Очереди задач -------------------------------------

// console.log(1);
//
// setTimeout(() => {
//     console.log(2);
// }, 0);
//
// Promise.resolve().then(() => {
//     console.log(3);
// });
//
// Promise.resolve().then(() => {
//     console.log(4);
// });
//
// setTimeout(() => {
//     console.log(5);
// }, 0);
//
// console.log(6);

//1 6 3 4 2 5

// Задача 17: Промисы и setTimeout -------------------------------------

// setTimeout(() => console.log(1), 0);
// Promise.resolve().then(() => {
//     console.log(2);
//     setTimeout(() => console.log(3), 0);
// });
// Promise.resolve().then(() => console.log(4));

// 2 4 1 3

// Задача 18: Работа с async и await -------------------------------------

// async function example() {
//     console.log(1);
//
//     const result = await new Promise(resolve => {
//         setTimeout(() => {
//             resolve(2);
//         }, 1000);
//     });
//
//     console.log(result);
//     console.log(3);
// }
//
// console.log(4);
// example();
// console.log(5);

//4 1 5 2 3

// Задача 19: Очередность в async функциях -------------------------------------

// async function first() {
//     console.log(1);
// }
//
// async function second() {
//     console.log(2);
//     await first();
//     console.log(3);
// }
//
// second();
// console.log(4);

//2 1 4 3 !!!!!!!!!!!!!!!!

// Задача 20: Порядок выполнения асинхронных задач -------------------------------------

// console.log(1);
//
// setTimeout(() => console.log(2), 0);
//
// async function asyncFunction() {
//     console.log(3);
//     await Promise.resolve();
//     console.log(4);
// }
//
// asyncFunction();
//
// console.log(5);

//1 3 5 4 2

//Задача 1 -------------------------------------

// console.log(1);
//
// setTimeout(() => {
//     console.log(2);
// }, 0);
//
// Promise.resolve().then(() => {
//     console.log(3);
// });
//
// process.nextTick(() => {
//     console.log(4);
// });
//
// console.log(5);

//1 5 4 3 2

// Задача 2 -------------------------------------

// setTimeout(() => {
//     console.log(1);
// }, 0);
//
// Promise.resolve().then(() => {
//     console.log(2);
//     process.nextTick(() => {
//         console.log(3);
//     });
// });
//
// process.nextTick(() => {
//     console.log(4);
//     setTimeout(() => {
//         console.log(5);
//     }, 0);
// });
//
// console.log(6);

//6 4 2 3 1 5

// Задача 3 -------------------------------------

// console.log(1);
//
// process.nextTick(() => {
//     console.log(2);
//     setTimeout(() => {
//         console.log(3);
//     }, 0);
//     Promise.resolve().then(() => {
//         console.log(4);
//     });
// });
//
// setTimeout(() => {
//     console.log(5);
//     process.nextTick(() => {
//         console.log(6);
//     });
// }, 0);
//
// Promise.resolve().then(() => {
//     console.log(7);
// });
//
// console.log(8);

//1 8 2 7 4 5 6 3

// Задача 4 -------------------------------------

// setTimeout(() => {
//     console.log(1);
//     process.nextTick(() => {
//         console.log(2);
//     });
// }, 0);
//
// Promise.resolve().then(() => {
//     console.log(3);
//     setTimeout(() => {
//         console.log(4);
//     }, 0);
// });
//
// process.nextTick(() => {
//     console.log(5);
//     Promise.resolve().then(() => {
//         console.log(6);
//     });
// });
//
// console.log(7);

//7 5 3 6 1 2 4

// Задача 5 -------------------------------------

// console.log(1);
//
// Promise.resolve().then(() => {
//     console.log(2);
//     return Promise.resolve(3);
// }).then((num) => {
//     console.log(num);
//     process.nextTick(() => {
//         console.log(4);
//     });
// });
//
// setTimeout(() => {
//     console.log(5);
//     process.nextTick(() => {
//         console.log(6);
//     });
// }, 0);
//
// process.nextTick(() => {
//     console.log(7);
//     setTimeout(() => {
//         console.log(8);
//     }, 0);
// });
//
// console.log(9);

//1 9 7 2 3 4 5 6 8

// Задача 6 -------------------------------------

// setTimeout(() => {
//     console.log(1);
// }, 0);
//
// Promise.resolve().then(() => {
//     console.log(2);
//     process.nextTick(() => {
//         console.log(3);
//     });
// });
//
// process.nextTick(() => {
//     console.log(4);
//     setTimeout(() => {
//         console.log(5);
//     }, 0);
// });
//
// console.log(6);
//
// setTimeout(() => {
//     console.log(7);
//     Promise.resolve().then(() => {
//         console.log(8);
//     });
// }, 0);
//
// Promise.resolve().then(() => {
//     console.log(9);
// });

//6 4 2 [9] [3] 1 7 8 5

// Задача 7 -------------------------------------

// console.log(1);
//
// process.nextTick(() => {
//     console.log(2);
// });
//
// setTimeout(() => {
//     console.log(3);
//     Promise.resolve().then(() => {
//         console.log(4);
//     });
// }, 0);
//
// Promise.resolve().then(() => {
//     console.log(5);
//     process.nextTick(() => {
//         console.log(6);
//     });
// });
//
// setTimeout(() => {
//     console.log(7);
// }, 0);
//
// console.log(8);

//1 8 2 5 6 3 4 7

// Задача 8 -------------------------------------

// setTimeout(() => {
//     console.log(1);
//     process.nextTick(() => {
//         console.log(2);
//     });
// }, 0);
//
// process.nextTick(() => {
//     console.log(3);
//     Promise.resolve().then(() => {
//         console.log(4);
//     });
// });
//
// Promise.resolve().then(() => {
//     console.log(5);
//     setTimeout(() => {
//         console.log(6);
//     }, 0);
// });
//
// console.log(7);
//
// setTimeout(() => {
//     console.log(8);
// }, 0);

//7 3 5 4 1 2 8 6

// Задача 9 -------------------------------------

// console.log(1);
//
// setTimeout(() => {
//     console.log(2);
//     Promise.resolve().then(() => {
//         console.log(3);
//     });
//     process.nextTick(() => {
//         console.log(4);
//     });
// }, 0);
//
// process.nextTick(() => {
//     console.log(5);
//     setTimeout(() => {
//         console.log(6);
//     }, 0);
// });
//
// Promise.resolve().then(() => {
//     console.log(7);
// });
//
// console.log(8);

//1 8 5 7 2 4 3 6

// Задача 10 -------------------------------------

// setTimeout(() => {
//     console.log(1);
// }, 0);
//
// Promise.resolve().then(() => {
//     console.log(2);
//     return 3;
// }).then((num) => {
//     console.log(num);
//     return new Promise((resolve) => {
//         setTimeout(() => {
//             console.log(4);
//             resolve(5);
//         }, 0);
//     });
// }).then((num) => {
//     console.log(num);
// });
//
// process.nextTick(() => {
//     console.log(6);
// });
//
// console.log(7);

//7 6 2 3 1 4 5