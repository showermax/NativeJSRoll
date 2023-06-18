// // если произошло "событие", то "функция"
// // событие создает объект - event - который содержит информацию о событии
// // после события event передаётся в колбэк

// const sm = window.document.getElementById('small')

// // document.createElement('div') - создание div

// const handler1 = ()=>{
//     alert('Yo')
// }
// const handler2 = ()=>{
//     alert('Yo once more')
// }

// //1st approach - только один обработчик
// sm.onclick = handler1       

// sm.onclick = null // перезатерли событие - сбросили.

// //2nd approach - можем назначать несколько обработчиков событий

// sm.addEventListener('click', handler1)
// sm.addEventListener('click', handler2) // можем назначать несколько обработчиков событий
// // sm.addEventListener('click', () => alert('that\'s the end'))

// sm.removeEventListener('click', handler1)
// sm.removeEventListener('click', handler2)
// sm.removeEventListener('click', () => alert('that\'s the end')) // не снимет обработчик, потому что функция - анонимная

// const handler4 =(e) => console.log(e)

// // sm.addEventListener('click', handler4)

// const md = document.getElementById('medium')
// const bg = document.getElementById('big')

// //  md.addEventListener('click', handler1)
// //  bg.addEventListener('click', handler2)

// // Стандарт DOM Events описывает 3 фазы прохода события:

// // Фаза погружения (capturing phase) – событие сначала идёт сверху вниз.
// // Фаза цели (target phase) – событие достигло целевого(исходного) элемента.
// // Фаза всплытия (bubbling stage) – событие начинает всплывать.
// // target - самый нижний элемент при всплытии, тот на котором произошло событие
// // currentTarget - элемент, который сейчас вызывает обработчик

// // sm.addEventListener('click', (e)=> {
// //     e.stopPropagation() //остановить всплытие
// //     if (e.currentTarget.id === 'small') {
// //         alert('Yo, small is pushed')
// //     }
// // })

// sm.addEventListener('click', (e)=>{
//     if (e.currentTarget.id === 'small' && e.target.id !== 'small') {
//                  alert(e.target.id)
//              }
// } )

// const a = document.getElementById('a')

// a.addEventListener('click', (e)=> {
//     e.preventDefault()
//     alert('the default action is changed')
// })
// const td_1 = 'qw-34'
// const td_2 = 'fd-74'
// const td_3 = 'hf-39'

// const todolists = [
//     {
//         id:td_1,
//         title: 'wht to learn',
//         filter: 'all',
//         // tasks: [
//         // {id: 1, title: "HTML", isDone: false},
//         // {id: 2, title: "CSS", isDone: false},
//         // {id: 3, title: "JS/TS", isDone: false}
//         // ]
//     },
//     {
//         id:td_2,
//         title: 'wht to buy',
//         filter: 'all',
//         // tasks: [
//         // {id: 1, title: "HTML", isDone: false},
//         // {id: 2, title: "CSS", isDone: false},
//         // {id: 3, title: "JS/TS", isDone: false}
//         // ]
//     }
// ]

// const tasks = {
//     [td_1]: [ //квадратные скобки нужны для того, чтобы интерпретатор принимал td_1 как переменную а не как строку
//         {id: 1, title: "HTML", isDone: false},
//         {id: 2, title: "CSS", isDone: false},
//         {id: 3, title: "JS/TS", isDone: false}
//     ],
//     [td_2]: [
//         {id: 1, title: "HTML", isDone: false},
//         {id: 2, title: "CSS", isDone: false},
//         {id: 3, title: "JS/TS", isDone: false}
//         ]
// }

// // console.log(tasks[td_1])
// // console.log([...tasks[td_1], {id:10, title: "New task", isDone: false}])
// // console.log()
// const addTodoList = (title)=> {
//     const td_id = 'wh-21'
//     const newToDo ={
//         id: td_id,
//         title: title,
//         filter: 'all'
//     }
//     const updateToDo = [...todolists, newToDo]
//     //console.log(updateToDo)

//     const copyTasks = {...tasks, [td_id]:[]}
//   //  console.log(copyTasks)
// }
// addTodoList('what to drink')

// const nums=[1,2,3,14,5,6,7,8,9]

// console.log(nums.reduce((acc,el)=>acc*el, 1))
// console.log(nums.reduce((acc,el)=>acc>el?acc:el))


// let students = [
//     {   id: 1,
//         name: "Bob",
//         age: 22,
//         isMarried: true,
//         scores: 85
//     },
//     {
//         id: 2,
//         name: "Alex",
//         age: 21,
//         isMarried: true,
//         scores: 89
//     },
//     {
//         id: 3,
//         name: "Nick",
//         age: 20,
//         isMarried: false,
//         scores: 120
//     },
//     {
//         id: 4,
//         name: "John",
//         age: 26,
//         isMarried: false,
//         scores: 100
//     }
// ];

// const names = students.reduce((acc,el)=> [...acc,el.name],[])
// console.log(names)

// метод sort - единственный способо сортировки массивов в js сортирует по юникоду(таблица)
const names = ["Donald", "Alex", "Bobby"]
console.log(names.sort())

const names_2 = ["Donald", "ALex", "aLEX", "игорь", "Юрий"]
console.log(names_2.sort())
console.log(names_2)
// работает мутабельно
// возвращает ссылку на исходный массив
const names_3 = ["Donald", "Frank", "Arnold"]
console.log(names_3 === names_3.sort())
console.log(names_3)
// числа тоже по юникоду
const names_n = [1000, 999, 77, 333, -3]
//console.log(names_n.sort())

// для остальных случаев необходимо передать колбэк - ф-цию сравнения

const compareFunc = (a, b) => { // если a>b надо вернуть положительное число, если они равны или a<b, то отрицательное - и тогда они меняются местами - ТАК УСТРОЕН SORT
    if (a > b) {
        return 10 // любое положительное число
    } else {
        return -10 // любое отрицательное
    }
}
console.log(names_n.sort(compareFunc))

const names_n2 = [100, 9949, 77, 13, -3, 0]
console.log(names_n2.sort((a, b) => a - b))
console.log(names_n2.sort((a, b) => b - a))

const students = [
    {
        name: "Bob",
        age: 22,
        isMarried: true,
        scores: 95
    },
    {
        name: "Alex",
        age: 24,
        isMarried: true,
        scores: 89
    },
    {
        name: "Helge",
        age: 24,
        isMarried: true,
        scores: 90
    },
    {
        name: "Nick",
        age: 20,
        isMarried: false,
        scores: 120
    },
    {
        name: "John",
        age: 19,
        isMarried: false,
        scores: 121
    },
    {
        name: "alex",
        age: 22,
        isMarried: true,
        scores: 89
    },
];
//пишем сами функцию сравнения
const sortByName = (a, b) => {
    if (a.name.toLowerCase() > b.name.toLowerCase) {
        return 1
    } else {
        return -1
    }
}
//console.log(students.sort(sortByName))

console.log((students.sort((a, b) => a.name.localeCompare(b.name)))) // по строкам

console.log((students.sort((a, b) => a.age - b.age))) // по числам


//bubble sort

const nums = [9, 5, 3, 7, 5, -8, 3, 8, -4, -2, 0, 5]
let j = 0
let k = 0
while (j < nums.length - 1) {
    let isSorted = true
    for (let i = 0; i < nums.length - 1 - j; i++) {
        k=k+1
        if (nums[i] > nums[i + 1]) {
            let a = nums[i]
            nums[i] = nums[i + 1]
            nums[i + 1] = a
            isSorted = false
        }
    }
    if (isSorted) break
    j++
}
console.log(nums)
console.log(k)