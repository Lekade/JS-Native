// //-------------------------Задача 1
//1Асинхронный запрос данных:
// Напиши функцию, которая делает запрос к API (используй fetch) и возвращает данные. Обработай результат с помощью Promises.
//
// const fetchFN = (url) => {
//     return fetch(url).then(res => {
//         if (!res.ok) {
//             throw new Error(`HTTP error! status: ${res.status}`);
//         }
//         return res.json(); // или res.text(), в зависимости от типа данных
//     });
// }

// fetchFN('https://jsonplaceholder.typicode.com/todos/1')
//     .then(data => {
//         console.log(data);
//     })
//     .catch(error => {
//         console.error('There was an error:', error);
//     });
//

// //-------------------------Задача 2
//2 Цепочка Promises:
// Создай цепочку из нескольких Promises, где каждый следующий зависит от результата предыдущего. Например, последовательно загрузи данные с разных API.

// fetchFN('https://jsonplaceholder.typicode.com/todos/1')
//     .then(data => {
//         return fetchFN('https://jsonplaceholder.typicode.com/todos/2')
//     })
//     .then(data => {
//         return fetchFN('https://jsonplaceholder.typicode.com/todos/3')
//     })
//     .then(data => {
//     return fetchFN('https://jsonplaceholder.typicode.com/todos/4')
//     })
//     .then(data => {
//         return fetchFN('https://jsonplaceholder.typicode.com/todos/5')
//     })
//     .catch(error => {
//         console.error('There was an error:', error);
//     });
//
// //(вариант 2)
//     const urls = [
//         'https://jsonplaceholder.typicode.com/todos/1',
//         'https://jsonplaceholder.typicode.com/todos/2',
//         'https://jsonplaceholder.typicode.com/todos/3',
//         'https://jsonplaceholder.typicode.com/todos/4',
//         'https://jsonplaceholder.typicode.com/todos/5'
//     ];
//
//     urls.reduce((promiseChain, url) => {
//         return promiseChain.then(() => fetchFN(url));
//     }, Promise.resolve())
//         .catch(error => {
//             console.error('There was an error:', error);
//         });
//

// //-------------------------Задача 3
//
//3 Обработка ошибок:
// Напиши функцию, которая выполняет асинхронную операцию с возможностью возникновения ошибки. Обработай ошибку с помощью .catch.

// //(подходит решение первой задачи)
//

// //-------------------------Задача 4
//
//4 Promise.all:
// Напиши функцию, которая одновременно делает несколько асинхронных запросов к API и возвращает результат всех запросов сразу с помощью Promise.all.
//
// Promise.all([
//     fetch('https://jsonplaceholder.typicode.com/todos/1'),
//     fetch('https://jsonplaceholder.typicode.com/todos/2'),
//     fetch('https://jsonplaceholder.typicode.com/todos/3'),
//     fetch('https://jsonplaceholder.typicode.com/todos/4'),
//     fetch('https://jsonplaceholder.typicode.com/todos/5'),
// ])
//     .then(responses => {
//         // Преобразуем каждый Response объект в JSON
//         return Promise.all(responses.map(res => {
//             if (!res.ok) {
//                 throw new Error(`HTTP error! status: ${res.status}`);
//             }
//             return res.json();
//         }));
//     })
//     .then(data => {
//         console.log('Fetched data:', data);
//     })
//     .catch(error => {
//         console.error('There was an error:', error);
//     });
//

// //-------------------------Задача 5
//
//5 Promise.race:
// Создай несколько асинхронных операций и используй Promise.race, чтобы получить результат самой быстрой из них.


// Promise.race([
//     fetch("https://yahoo.com"),
//    fetch("https://bing.com"),
//    fetch("https://google.com"),
// ]).then(res => {
//         if (!res.ok) {
//             throw new Error(`HTTP error! status: ${res.status}`);
//         }
//         return res.text(); // или res.text(), в зависимости от типа данных
//     })
//     .then(data => {
//         console.log('Fetched data:', data);
//     })
//     .catch(error => {
//         console.error('There was an error:', error);
//     });
//
// //-------------------------Задача 6
//
//6 Создание промиса:
// Реализуй свой собственный Promise, который разрешается через определенное время (например, через 2 секунды) с произвольным значением.


// const myPromise = new Promise((res, rej) => {
//     return setTimeout(() => {
//         res(Math.floor(Math.random() * 100))
//     }, 2000)
// })
//
// myPromise.then(data => {
//     console.log(data)
//     }
// ).catch(error => {
//     console.log(error)
//     }
// )

// //-------------------------Задача 7
//
//7 Асинхронная итерация:
// Напиши функцию, которая принимает массив промисов и выполняет их поочередно, ожидая выполнения каждого.

//     const createPromise = () => {
//         return new Promise((res) => {
//             setTimeout(() => {
//                 res(Math.floor(Math.random() * 100))
//             }, 2000)
//         })
//     }
//
//     const promises = [
//         createPromise(),
//         createPromise(),
//         createPromise(),
//         createPromise(),
//         createPromise()
//     ];
//
//     const accomplishPromisesSequentially =  (arrPromises) => {
//         return arrPromises.reduce((acc, current) => {
//             return acc.then(resolve => {
//                return  current.then(data => {
//                     return [...resolve, data]
//                 })
//             })
//
//             },
//             Promise.resolve([]))
//     }
//
// accomplishPromisesSequentially(promises).then(finallyResult => {
//     console.log('All promises resolved sequentially:', finallyResult)
// }).catch(error => {
//     console.log('There was an error:', error)
//     }
// )

// //-------------------------Задача 8
//
//8 Имитация асинхронной загрузки:
// Создай функцию, которая имитирует загрузку файла с сервера. Верни промис, который разрешится через некоторое время, симулируя процесс загрузки.

// const uploading = () => {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             if (Math.random() > 0.5) {
//                 resolve({status: 200});
//             } else {
//                 reject({status: 500, message: "Upload failed"});
//             }
//         }, 5000)
//     })
// }
//
// uploading()
//     .then(data => {
//     console.log( 'uploading status : ', data.status)
// }).catch(error => {
//     console.log('error uploading : ', error.status, error.message)
// })

//
//9 Цепочка с разными результатами:
// Создай цепочку Promises, где каждый следующий шаг преобразует результат предыдущего. Например, начни с числа, затем преобразуй его в строку, затем сделай обратную операцию и так далее.
//

// new Promise((resolve, reject) => {
//     if(Math.random() > 0.5){
//         resolve(Math.floor(Math.random()*100))
//     }
//     reject(Math.floor(Math.random()*100).toString())
// })
//     .then(data => {
//         console.log('number:', data)
//        return  data.toString()
//     })
//     .catch(error => {
//         console.log('string:', error)
//         return  error
//     })
//     .then(data => {
//         console.log('string:', data)
//         return  Number(data)
//     })
//     .then(data => {
//         console.log('number:', data)
//     }).catch(error => {
//         console.log(error)
//     })


//10 Комбинация async/await и Promises:
// Напиши функцию, которая использует async/await для обработки асинхронных операций и возвращает Promise. Попробуй также обработать ошибки.


// const accomplishPromise = async () => {
//     const id = Math.floor(Math.random() * 100)
//     const response = await fetch(`https://jsonplaceholder.typicode.com/todos/${id}`)
//
//     if (!response.ok) {
//         throw new Error(`HTTP error! status: ${response.status}`);
//     }
//     return response.json(); // или res.text(), в зависимости от типа данных
// }
// accomplishPromise()
//     .then(data => {
//         console.log('data:', data)
//     })
//     .catch(error => {
//         console.log('error', error)
//     })
