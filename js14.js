//class

const car1 = {
    brand:'bmw',
    maxSpeed: 200,
    startEngine() {
        console.log(`Start ${this.brand}`)
    }
}

function Car (brand, maxSpeed) {
    this.brand = brand
    this.maxSpeed = maxSpeed
    this.startEngine = function() {
        console.log(`Start ${this.brand}`)
    }
}