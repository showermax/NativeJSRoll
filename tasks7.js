//1. Напишите функцию, которая находит сумму всех элементов массива.

function sumArray(arr) {
    return arr.reduce((sum,el) => sum+el,0)
}
const nums = [1, 2, 3, 4, 5];


console.log(sumArray(nums)); // Выведет 15












// 2. Напишите функцию, которая находит наименьшее число в массиве.
// function findMin(arr) {
//     let min =arr[0]
//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i]<min) {
//             min=arr[i]
//         }
//     }
//     return min
// }
// const nums = [3, 6, 1, 8, 2];
// console.log(findMin(nums)); // Выведет 1













//3. Напишите функцию, которая находит все числа в диапазоне от start до end, которые делятся на заданное число divisor.
// function findDivisible(start, end, divisor) {
//     let newarr=[]
//     for (let i = start; i < end; i++) {
//         if (i%divisor===0) newarr.push(i)
//     }
//     return newarr
// }
// console.log(findDivisible(1, 10, 2)); // Выведет [2, 4, 6, 8, 10]
















// // 4. Напишите функцию, которая находит все перестановки заданной строки.
// function permutations(str) {
//     let temp = 0
//     let arrstr = str.split('')
//     let finalarr = []
//     for (let j = 0; j < str.length; j++) {
//         for (let i = 0; i < arrstr.length-1; i++) {
//             temp = arrstr[i]
//             arrstr[i] = arrstr[i + 1]
//             arrstr[i + 1] = temp
//             finalarr.push(arrstr.join(''))
//         }
//     }
//     return finalarr
// }
//
// console.log(permutations('abc')); // Выведет ['abc', 'acb', 'bac', 'bca', 'cab', 'cba']




















//5. Напишите функцию, которая находит самое часто встречающееся значение в массиве.
function findMode(arr) {
    let count = 0
    let max = 1
    let number=arr[0]
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr.length; j++) {
             if (arr[i] === arr[j]) {
                 count++
                 if (count>max) {
                     max=count
                     number=arr[j]
                 }
             }
        }
    } return number
}
// const arr = [1, 2, 3, 4, 5, 2, 3, 2];
const arr = [1, 3, 3, 0, 0, 3, 0, 0];
console.log(findMode(arr)); // Выведет 2


//6. Задача на цикл for: Напишите функцию, которая выводит на экран все элементы массива, кроме первого и последнего.
//function printArrayWithoutFirstAndLast(arr) {}
//const arr = [1, 2, 3, 4, 5];
//printArrayWithoutFirstAndLast(arr); // Выведет 2, 3, 4


//7. Задача на цикл for in: Напишите функцию, которая принимает объект и выводит все его свойства и значения.
//function printObject(obj) {}
//const obj = { name: 'John', age: 30, city: 'New York' };
//printObject(obj); // Выведет name: John, age: 30, city: New York


//8. Задача на цикл for of: Напишите функцию, которая находит сумму всех элементов массива.
//function sumArray(arr) {}
//const arr = [1, 2, 3, 4, 5];
//console.log(sumArray(arr)); // Выведет 15

//9. Задача на цикл while: Напишите функцию, которая находит первый положительный элемент в массиве.
//function findFirstPositiveElement(arr) {}
//const arr = [-2, -1, 0, 1, 2];
//console.log(findFirstPositiveElement(arr)); // Выведет 1

//10.Задача на цикл do while: Напишите функцию, которая запрашивает у пользователя числа с клавиатуры до тех пор,
//пока он не введет отрицательное число.
function getNumbersFromUser() {
    let a=0
    do {
        a++
    } while (a<4)
}
const numbers = getNumbersFromUser();
console.log(numbers); // Выведет массив введенных пользователем чисел

















