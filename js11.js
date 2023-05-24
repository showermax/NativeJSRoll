const server = {
    getData() {
        return new Promise ((resolve,reject)=>{
            setTimeout(()=> {
                // resolve('Promise resolved')  // либо резолв
                reject('Error')  // либо режект
            },2000)
        })
    }
}


const pr = server.getData()

// pr.then((data)=>{console.log('data', data)}).catch((data)=>{console.log('data',data)})

// fetch('https://google.com/?query=js').then((data)=>{console.log('data from google', data.url)})


//статические методы промисов

// all || race || allsettled || any

// const promise1 = fetch('https://google.com/?query=js');
// const promise2 = fetch('https://yahoo.com/?query=js');
// const promise3 = fetch('https://duckduckgo.com/?query=js');
//
// const bigPromise = Promise.all([promise1, promise2, promise3]);
//
// bigPromise
//   .then((data) => {
//     console.log(data[0].url);
//     console.log(data[1].url);
//     console.log(data[2].url);
//   })
//   .catch((err) => {
//     console.log('ERROR', err);
//   });

//race возвращает первый выполненный независимо от ответа

// const promise1 = fetch('https://google.com/?query=js');
// const promise2 = fetch('https://yahoo1.com/?query=js');
// const promise3 = fetch('https://duckduckgo.com/?query=js');
//
// const bigPromise = Promise.allSettled([promise1, promise2, promise3])
//     bigPromise.then((data)=>{console.log(data)})
// const promise1 = fetch('https://google.com/?query=js');
// const promise2 = fetch('https://yahoo.com/?query=js');
// const promise3 = fetch('https://duckduckxgo.com/?query=js');
// const bigPromise = Promise.any([promise1, promise2, promise3]);
// bigPromise.then((data)=>{console.log(data.url)})
//
// const fetchData = () => {
//     return new Promise(resolve => {
//         setTimeout(() => {
//             resolve('Data fetched successfully');
//         }, 2000); // имитируем задержку в 2 секунды
//     });
// };
//
// const timeoutPromise = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         reject('Timeout occurred');
//     }, 1000); // устанавливаем тайм-аут в 1 секунду
// });

// Promise.race([fetchData(), timeoutPromise])
//     .then(result => console.log(result))
//     .catch(error => console.error(error));


