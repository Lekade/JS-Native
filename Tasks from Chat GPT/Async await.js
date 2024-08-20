//Задача 1: Параллельная и последовательная загрузка-------------------------------------
// Напиши функцию fetchInParallelAndSequence(urls), которая принимает массив URL-адресов и:
//
// Выполняет первые три запроса параллельно.
// После завершения первых трех запросов выполняет оставшиеся запросы поочередно.
// Возвращает массив с результатами всех запросов.

// const urls = [
//     'https://jsonplaceholder.typicode.com/todos/1',
//     'https://jsonplaceholder.typicode.com/todos/2',
//     'https://jsonplaceholder.typicode.com/todos/3',
//     'https://jsonplaceholder.typicode.com/todos/4',
//     'https://jsonplaceholder.typicode.com/todos/5'
// ];
//
// const fetchInParallelAndSequence = async (urls) => {
//     const arrFetch = urls.map(url => fetch(url))
//     const [fetch1, fetch2, fetch3, ...fetches] = arrFetch
//     const initialResponses = await Promise.all([fetch1, fetch2, fetch3]);
//     const initialData = await Promise.all(initialResponses.map(response => response.json()));
//
//     const allData = await fetches.reduce( async (accPromise, curr)=>{
//         const acc = await accPromise
//         const result = await curr
//         const data = await result.json()
//         return [...acc, data]
//     }, Promise.resolve([]))
//     return [...initialData, ...allData]
// }
//
// fetchInParallelAndSequence(urls).then(console.log).catch(console.log)


// Задача 2: Ограничение количества одновременных запросов-------------------------------------
// Создай функцию limitedParallelFetch(urls, limit), которая принимает массив URL-адресов и лимит на количество одновременных запросов.
//
// Функция должна отправлять запросы, но не более limit одновременно.
// Возвращает массив с результатами всех запросов.

// const limitedParallelFetch = async (urls, limit) => {
//     const arrData = []
//     for(let i = 0; i < urls.length; i = i + limit){
//         const response = await Promise.all(urls.slice(i, i + limit).map(url => fetch(url)))
//         const data = await Promise.all(response.map(res => res.json()))
//         arrData.push(...data)
//     }
//     return arrData
// }
//
// limitedParallelFetch(urls, 2).then(console.log).catch(console.log)


// Задача 3: Ретрай запросов-------------------------------------
// Напиши функцию fetchWithRetry(url, retries), которая выполняет HTTP-запрос на указанный url.
//
// Если запрос неудачен, функция должна повторять запрос до retries раз.
// Если после всех попыток запрос не удался, функция должна бросать ошибку.


// const fetchWithRetry = async (url, retries) => {
//     try {
//         const response = await fetch(url);
//         if (!response.ok) {
//             throw new Error(`HTTP error! Status: ${response.status}`);
//         }
//         return await response.json();
//     } catch (error) {
//         if (retries <= 1) {
//             throw error
//         }
//         return await fetchWithRetry(url, retries - 1);
//     }
// };
//
// fetchWithRetry('https://jsonplaceholder.typicode.com/todos/1', 3)
//     .then(console.log)
//     .catch(console.log);


// Задача 4: Цепочка асинхронных действий-------------------------------------
// Напиши функцию performSequentialTasks(tasks), которая принимает массив функций-асинхронных задач и выполняет их последовательно, передавая результат каждой задачи в следующую.
//
// Каждая функция в массиве tasks возвращает промис.
// Функция должна возвращать результат последней задачи.

// const funcAsync = (n) => {
//     return new Promise((res) => {
//         setTimeout(()=> {
//             res(2 * n)
//         }, n * 10)
//     })
// }
//
// const tasks = [funcAsync, funcAsync, funcAsync, funcAsync, funcAsync]
//
// const performSequentialTasks = async (tasks, initialValue) => {
//     return await tasks.reduce(async (accPromise, curr)=>{
//         const acc = await accPromise
//         return await curr(acc)
//     }, Promise.resolve(initialValue))
// }
//
// performSequentialTasks(tasks, 1).then(console.log).catch(console.log)


// Задача 5: Прерывание асинхронной операции-------------------------------------
// Создай функцию fetchWithTimeout(url, timeout), которая выполняет запрос по указанному URL.
//
// Если запрос занимает больше времени, чем указано в timeout (в миллисекундах), запрос должен прерываться, и функция должна возвращать ошибку.

// const fetchWithTimeout = async (url, timeout) => {
//     const controller = new AbortController();
//     const timeoutId = setTimeout(() => controller.abort(), timeout)
//     try{
//         const response = await fetch(url, {signal: controller.signal})
//         clearTimeout(timeoutId);
//         if (!response.ok) {
//             throw new Error(`HTTP error! Status: ${response.status}`);
//         }
//         return await response.json()
//     }catch (err){
//         if (err.name === 'AbortError') {
//             console.error('Error: the operation was aborted due to timeout!');
//             throw new Error('Request was aborted due to timeout');
//         } else {
//             throw err;
//         }
//     }
// }
//
// fetchWithTimeout('https://httpbin.org/delay/10', 1000).then(console.log).catch(console.error)

// Задача 7: Детектирование первой завершенной операции-------------------------------------
// Напиши функцию detectFirstCompleted(urls), которая принимает массив URL-адресов и возвращает результат первого успешно завершенного запроса.
//
// Если ни один запрос не удался, функция должна возвращать ошибку.

// const detectFirstCompleted = async (urls) => {
//     const arrUrlsFetches = urls.map(url => fetch(url));
//     const response = await Promise.any(arrUrlsFetches);
//     if (!response.ok) {
//         throw new Error(`HTTP error! Status: ${response.status}`);
//     }
//     return await response.json();
// }
//
// detectFirstCompleted(urls)
//     .then(console.log)
//     .catch(error => console.error('All requests failed:', error));

// Задача 8: Асинхронная фильтрация-------------------------------------
// Создай функцию filterAsync(array, asyncPredicate), которая принимает массив и асинхронную функцию-предикат, фильтрует массив и возвращает новый массив, содержащий только те элементы, для которых предикат вернул true.
//
// Функция-предикат должна быть асинхронной.

// const asyncPredicate = async (num) => {
//     return new Promise((resolve) => {
//         setTimeout(() => {
//             resolve(num % 2 === 0)
//         }, 1000)
//     })
// }
//
// const filterAsync = async (array, asyncPredicate) => {
//     const result = await Promise.all(array.map(asyncPredicate))
//     return array.filter((_, ind) => result[ind])
// }
//
// filterAsync([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], asyncPredicate)
//     .then(console.log)
//     .catch(console.error)


// Задача 9: Асинхронное снижение (reduce)-------------------------------------
// Реализуй функцию reduceAsync(array, asyncReducer, initialValue), которая выполняет асинхронное уменьшение массива.
//
// Функция должна проходить по массиву, применять asyncReducer к каждому элементу, накапливать результат и возвращать его.
// asyncReducer принимает аккумулятор и текущий элемент и возвращает промис.



// Задача 10: Каскадная отмена асинхронных операций-------------------------------------
// Напиши функцию cascadingAbort(tasks), которая принимает массив функций-асинхронных задач, каждая из которых возвращает промис.
//
// Если одна из задач завершилась ошибкой, все последующие задачи должны быть отменены.
// Возвращает массив с результатами выполненных задач до момента отмены.

