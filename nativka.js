// 1. Создайте функцию, которая будет принимать массив элементов и функцию обратного вызова (callback), и для каждого элемента массива
// будет применять функцию обратного вызова(функция вывода).
// const applyCallback = (array, callback) => {
//     for (let i = 0; i < array.length; i++) {
//        console.log(array[i]);
//
//     }
// }
// const array = [1, 2, 3];
// applyCallback(array);
// console.log('array[i]');



//2 Напишите функцию, которая принимает массив чисел и функцию обратного (которая умножает каждый элемент массива на 2) вызова и возвращает новый массив, содержащий результат применения функции
// обратного вызова к каждому элементу исходного массива.
//const applyCallback = (array, callback) => {}
//const array = [1, 2, 3];
//const callbackFunc = applyCallback(); // что-то нужно прописать
//console.log(callbackFunc);// [2, 4, 6]





//3 Создайте функцию, которая принимает два числа и функцию обратного вызова, которая выполняет арифметическую операцию  сложения между ними.
// const applyOperation = (x, y, operation) => {}
// const add = ;
// const result = applyOperation(2, 3, add);
// console.log(result);




// 4 Создайте функцию, которая принимает массив строк и функцию обратного вызова, которая фильтрует строки, если длинна строки меньше 7.
//const filterStrings = (array, callback) => {}
//const array = ['hello', 'world', 'javascript', 'callback'];
//const sortFunc = //написать функцию
//const filtered = filterStrings(array, sortFunc); // что- добавить
//console.log(filtered);




//5 Напишите функцию, которая принимает два массива и функцию обратного вызова, которая складывает элементы двух массивов.
//const zipArrays = (array1, array2, callback) => {}
//const array1 = [1, 2, 3];
//const array2 = [4, 5, 6];
//const zippedFunc = ;//написать функцию
//console.log(zipArrays(array1, array2, zippedFunc))




//6 Создайте функцию, которая принимает массив объектов и функцию обратного вызова, которая возвращает массив значений свойства age.
// const pluck = (array, property) => {}
// const people = [
//     { name: 'John', age: 25 },
//     { name: 'Jane', age: 30 },
//     { name: 'Bob', age: 20 }
// ];
// console.log(pluck(people, 'age'));





// 7. Создать функцию которая будет проверять является ли строка полиндромом
//Палиндро́м — число, буквосочетание, слово или текст, одинаково читающееся в обоих направлениях.
// const isPolindrom = (word) => {}
// console.log(isPolindrom("шабаш"))





// 8. Вывести самое короткое слово в консоль
// const findShort = (sentence) => {}
// console.log(findShort('The smallest word in sentence'))




// 9. Вывести в консоль инициалы (Александр Петров - А.В.)
//const toInitials = (name) = {}
// console.log(toInitials("Bill gates"))




// 10. Создание дубликатов символов строки ("abcd") => "A-Bb-Ccc-Dddd"
// const duplicate = (str) => {}
// console.log(duplicate('abcd'));




// 11. Отформатировать цифры в телефонный номер (123456789) => (123) 456-789
// const phoneNumber = (number) => {}
// console.log(phoneNumber('123456789'))

// function getStatus(isBusy) {
//     let msg = isBusy ? "busy" : "avaliable"
//     return    {
//         status: msg
//     }
// }
//
// console.log(getStatus(true))
let a=1
let s=2
let d=3
let f=4
let g=4
function sum(...nums) {
    // console.log(nums)
    return nums.reduce((s,el)=>s+el,0)

}

console.log(sum(1,2,3,5,6))
console.log(arguments)