// __proto__ | prototype

class Car {
  constructor(brand) {
    this.brand = brand;
    this.state = {};
  }

  startEngine() {
    console.log(`start ${this.brand}`);
  }
  stopEngine = () => {
    console.log(`stop ${this.brand}`);
  };
}

const car1 = new Car("bmw");
const car2 = new Car("bmw");

// console.log(car1.brand === car2.brand);
// console.log(car1 === car2);
// console.log(car1.startEngine === car2.startEngine);
// console.log(car1.stopEngine === car2.stopEngine);
// console.log(car1);
// console.log(car1);
// console.log(car1.brand.toUpperCase());

// console.log({}.__proto__ === {}.__proto__);

// function foo() {}
// function bar() {}

// // console.log(foo.__proto__ === bar.__proto__);
// console.log(foo.prototype === bar.prototype);

// function foo() {}
// const bar = () => {};
// console.log(foo.__proto__ === bar.__proto__);

// let age = 11;
// // console.log(age.prototype === Number.prototype);
// console.log(age.__proto__ === Number.prototype);

// class User {}
// console.log(User.__proto__.__proto__.__proto__ === null);

// const user1 = new User();

// console.log(user1.__proto__ === User.prototype);
// console.log(User.__proto__.__proto__ === Function.prototype);
