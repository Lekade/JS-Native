// // Задача 1: Счетчик с замыканием
// // Создайте функцию-счетчик, которая использует замыкание для хранения своего состояния.
// function createCounter() {
//     let counter = 0
//     return () => ++counter
// }
//
// const counter1 = createCounter();
// console.log(counter1()); // 1
// console.log(counter1()); // 2
//
// const counter2 = createCounter();
// console.log(counter2()); // 1
// console.log(counter2()); // 2
// console.log(counter1()); // 3


// // Задача 2: Лексическое окружение и асинхронность
// // Используйте замыкание, чтобы корректно сохранить значения переменной в асинхронных вызовах.
// function printNumbers() {
//     for (var i = 1; i <= 5; i++) {
//         (function (i){
//             setTimeout(function (){console.log(i)}, i*1000)
//         })(i)
//     }
//
// }
// printNumbers();
// // Ожидаемый вывод в консоль: 1, 2, 3, 4, 5 (с задержкой в 1 секунду между числами)


// Задача 3: Функция генератор
// Создайте функцию, которая генерирует массив функций, каждая из которых возвращает свое индексное значение.
// function createFunctions() {
//     const arr = []
//     for (let i = 0; i < 3; i++){
//         arr.push(() => i)
//     }
//     return arr
// }
//
// const funcs = createFunctions();
// console.log(funcs[0]()); // 0
// console.log(funcs[1]()); // 1
// console.log(funcs[2]()); // 2
//
//
// // Задача 4: Счетчик с ограничением
// // Создайте функцию-счетчик, который можно сбросить, если он достигает определенного значения.
// function createLimitedCounter(limit) {
//     let counter = 0
//     return () => {
//         if(counter < limit){
//             ++counter
//         }else {
//             counter = 1
//         }
//         return counter
//     }
// }
//
// const limitedCounter = createLimitedCounter(3);
// console.log(limitedCounter()); // 1
// console.log(limitedCounter()); // 2
// console.log(limitedCounter()); // 3
// console.log(limitedCounter()); // 1
// console.log(limitedCounter()); // 2
//
//
// // Задача 5: Частичное применение функции
// // Создайте функцию, которая частично применяет свои аргументы.
// function partial(func, ...fixedArgs) {
//     return function(remainingArgs) {
//         return func(...fixedArgs, remainingArgs);
//     };
// }
// const add = (a, b, c) => a + b + c;
// const add5 = partial(add, 2, 3);
// console.log(add5(4)); // 9 (2 + 3 + 4)
//
//
// // Задача 6: Углубление в лексическое окружение
// // Создайте функцию, которая использует несколько уровней замыканий.
// function multiLevelClosure() {
//     let level1 = 'level1';
//
//     return function() {
//         let level2 = 'level2';
//
//         return function() {
//             let level3 = 'level3';
//
//             return `${level1} -> ${level2} -> ${level3}`;
//         };
//     };
// }
// const closure = multiLevelClosure();
// const innerClosure = closure();
// console.log(innerClosure()); // "level1 -> level2 -> level3"
//
//
// // Задача 7: Умножение с замыканием
// // Создайте функцию createMultiplier, которая принимает один аргумент factor и возвращает функцию, которая умножает любой переданный ей аргумент на factor.
// function createMultiplier(factor) {
//     return (n) => factor*n
// }
//
// const multiplyBy2 = createMultiplier(2);
// console.log(multiplyBy2(5)); // 10
// const multiplyBy3 = createMultiplier(3);
// console.log(multiplyBy3(4)); // 12
//
//
// // Задача 8: Логирование с префиксом
// // Создайте функцию createLogger, которая принимает строку prefix и возвращает функцию, которая принимает строку message и выводит в консоль prefix перед сообщением.
// function createLogger(prefix) {
//     return (text) => console.log(`${prefix} ${text}`)
// }
// const infoLogger = createLogger("INFO:");
// console.log(infoLogger("This is an info message.")); // "INFO: This is an info message."
// const errorLogger = createLogger("ERROR:");
// console.log(errorLogger("This is an error message.")); // "ERROR: This is an error message."
//
//
// // Задача 9: Счетчик с шагом
// // Создайте функцию createSteppedCounter, которая принимает аргумент step и возвращает функцию-счетчик, который увеличивает свое значение на step при каждом вызове.
// function createSteppedCounter(step) {
//     let counter = 0
//     return () => counter += step
// }
//
// const steppedCounter = createSteppedCounter(2);
// console.log(steppedCounter()); // 2
// console.log(steppedCounter()); // 4
// console.log(steppedCounter()); // 6
//
//
// // Задача 10: Генератор последовательностей
// // Создайте функцию createSequenceGenerator, которая принимает два аргумента start и step, и возвращает функцию, которая при каждом вызове возвращает следующее значение в последовательности, начиная с start и увеличиваясь на step.
// function createSequenceGenerator(start, step) {
//     start = start - step
//     return () => start += step
// }
//
// const sequence = createSequenceGenerator(10, 3);
// console.log(sequence()); // 10
// console.log(sequence()); // 13
// console.log(sequence()); // 16
//
//
// // Задача 11: Кеширование функций
// // Создайте функцию createCache, которая возвращает функцию, которая кеширует результаты вычислений переданной ей функции. Если аргумент уже был передан, возвращается кешированный результат.
// function createCache(func) {
//     const cash = {}
//     return (arg) => {
//         if(arg in cash){
//             return  cash[arg]
//         }else {
//             const result = func(arg)
//             cash[arg] = result
//             return result
//         }
//     }
// }
// const square = x => x * x;
// const cachedSquare = createCache(square);
// console.log(cachedSquare(5)); // 25
// console.log(cachedSquare(5)); // 25 (из кеша)
// console.log(cachedSquare(6)); // 36