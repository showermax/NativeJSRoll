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

function User (name, sex) {
    this.name = name
    this.sex = sex
    // this.getUser = function () {
    //     console.log(`The name of the user is ${this.name} the sex is ${this.sex}`)
    // }
}

User.prototype.getUser = function () {
    console.log(`The name of the user is ${this.name} the sex is ${this.sex}`)
}

const max = new User('Max', 'male')
max.getUser()
console.log(max)

class Shop {
    #address
    #category
    #rate
    constructor (address,cat) {
        this.address = address
        this.category = cat
        this.rate = 0
    }
    getShop () {
        console.log(`The shop on ${this.address} is ${this.category} with rate ${this.rate}`)
    }
    rateShop (rate) {
        this.rate = rate
    }

}

const tomato = new Shop('Gromova 26','groceries ')
tomato.getShop()
tomato.rateShop(3)
tomato.getShop()

class SmallShop extends Shop {
    constructor(address,isSmall) {
        super(address);
        this.isSmall = isSmall
    }
}
const firstSmallShop = new SmallShop('fed 5', true)

console.log(firstSmallShop)