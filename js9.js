// замыкание, лексическое окружение, рекурсия

// globalLE {startEngine: Function}  >>>> null
//
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

// let i = 0
// while (true) {
//     console.log(i++)
// }


const progresAr = (start, step, length) =>{
    if (length > 1)  return progresAr(start+step,step,length-1) + start
    else return start
}

console.log(progresAr(1,1,7))
console.log(1+2+3+4+5+6+7)