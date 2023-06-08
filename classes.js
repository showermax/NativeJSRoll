class MyClass {
    constructor(name, age, sex) {
        this.name = name
        this.age = age
        this.sex = sex
        this.counter = 0
    }
    sayHello() {
        console.log(`Hi, I'm ${this.name}`)
    }
    happyTimeLeft () {
        this.counter++
        console.log(`${80 - this.age} years left for ${this.name}`)
    }

}

class ExtendedMyClass extends MyClass {
    whoIsMale(){
        console.log(`I'm ${this.name} and I'm ${this.sex}`)
    }
}

const Max = new MyClass('Max', 36, 'male')
const Kate = new ExtendedMyClass('Kate', 36, 'female')

console.log(Kate.sayHello())
console.log(Kate.whoIsMale())

class SuperExtendedMyClass extends MyClass {
    constructor(name, age, sex, color) {
        super(name, age, sex)
        this.color = color
    }
    hairColor(){
        console.log(`${this.name} has ${this.color} hair`)
    }
}

const Danik = new SuperExtendedMyClass('Danik', 9, 'male', 'fair')

Danik.hairColor()
console.log(Danik.name)
Danik.sayHello()