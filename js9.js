// замыкание, лексическое окружение, рекурсия

// globalLE {startEngine: Function}  >>>> null

// const car = 'bmw' // globalLE {startEngine: Function, car:'bmw'}
//
// function startEngine() {
//     // environment --> globalLE ссфлка на внешнее окружение
//     // startEngineLE {}
//     const car = 'audi'
//
//     return ()=> {
//         // environment --> startEngineLE
//         // fooLE {}
//         console.log(`start ${car}`)
//     }
// }
//
// startEngine()


// const counter = () => {  // globalLE {counter: Function} --> null
//
//
//     let i = 0
//     return () => {
//         console.log(++i)
//     }
// }
//
// const count = counter()
// count()
// count()
// count()

// const fact = (k) => {
//     if (k===1) return 1
//     else {
//         return k*fact(k-1)
//     }
// }
// console.log(fact(6))

let i = 0
while (true) {
    console.log(i++)
}
