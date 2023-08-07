const Max = {
    age: 28
}

const Dan = {
    age: 1
}

const Person = {
    age: 10,
    getAge () {
        console.log(this.age)
    }
}

Person.getAge.bind(Dan).bind(Max)