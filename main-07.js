//1. Реализуйте функцию, которая принимает параметром подсторку, число повторов и разделитель, а возвращает сторку, состоящую из указанного количества повторов подстроки с использованием разделителя.
// repeatString("yo", 3, " ") => "yo yo yo"
// repeatString("yo", 3, ",") => "yo,yo,yo"
// repeatString("yo", 3, ", ") => "yo, yo, yo"
// repeatString("yo", 0, ", ") => ""
// repeatString("yo", 1, ", ") => "yo"
function repeatString (string, n, sep) {
    let arr=[]
    if(n===0) return ""
    for (let i = 0; i < n; i++) {
        arr.push(string)
    }
    return arr.join(sep)
}
console.log(repeatString("yo", 1, ", "))









//2. Реализуйте функцию, которая принимает параметром сторку и подстроку, а возвращает true, если строка начинается с указанной подстроки, в противном случае - false. Регистр не учитывается.
// checkStart("Incubator", "inc") => true
// checkStart("Incubator", "yo") => false
function checkStart (string,start) {
    return (string.slice(0,start.length).toLowerCase() === start.toLowerCase())
}

console.log(checkStart("Incubator", "incо"))














//3. Реализуйте функцию, которая принимает параметром строку и число (количество символов), а возвращает строку из параметров, обрезанную до указанного количества символов и завершает её многоточием.
//truncateString("Всем студентам инкубатора желаю удачи!", 10) => "Всем студе..."
function truncateString (string,n) {
    return string.slice(0,n) + '...'
}
console.log(truncateString("Всем студентам инкубатора желаю удачи!", 10))

















//4. Реализуйте функцию, которая принимает параметром сторку (предложение) и возвращает самое короткое слово в предложении, если в параметрах пустая строка или не строка, то возвращает null.
// getMinLengthWord("Всем студентам инкубатора желаю удачи.") => "Всем"
// getMinLengthWord("") => null
// getMinLengthWord(123) => null
// getMinLengthWord(true) => null
// getMinLengthWord(undefined) => null
function getMinLengthWord (string) {
    if (typeof string!== string || string.length===0) return null
    let newarr = string.split(' ')
    let minLength=newarr[0].length
    let k=0
    for (let i = 0; i < newarr.length-1; i++) {
        if (newarr[i].length<minLength) {
            minLength = newarr[i].length
            k=i
        }
    }
    return newarr[k]
}

console.log(getMinLengthWord(123))













//5. Реализуйте функцию, которая принимает параметром сторку (предложение) и возвращает то же предложение, где все слова написаны строчными, но начинаются с заглавных букв.
// setUpperCase("всем стУдентам инкуБатора Желаю удачИ") => "Всем Студентам Инкубатора Желаю Удачи!"
function setUpperCase(string) {
    return string.split(' ').map(el=>el[0].toUpperCase()+el.slice(1).toLowerCase()).join(' ')

}

console.log(setUpperCase("всем стУдентам инкуБатора Желаю удачИ"))
// !!!!!!!!!!!!!!!!!!После решения 5 задач - поднимаем руку!!!!!!!!

//6. Реализуйте функцию, котрая принимает параметрами строку и подстроку. Если все
// символы подстроки содержаться в стороке - возвращает true, если нет -
// возвращает false. Проверка проводится без учёта регистра и без учёта
// повторяющихся символов.
// * с учётом повторяющихся символов в подстроке


// isIncludes("Incubator", "Cut") => true
// isIncludes("Incubator", "table") => false
// isIncludes("Incubator", "inbba") => true //*false
// isIncludes("Incubator", "inba") => true  //*true
// isIncludes("Incubator", "Incubatorrr")=> true //*false

function isIncludes (str, substr) {
    let result = true
    for (let i = 0; i < substr.length; i++) {
        if (str.includes(substr[i])) {
            result = true
        }else result = false
    }
return result
}

console.log(isIncludes("Incubator", "Incubatorrr"))


  




