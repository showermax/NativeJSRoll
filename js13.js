function a () {
    console.log(this) // window - потому this только в момент вызова - это фанкшн деларейшн - для стрелочной в момент создания
}
a()

const car = {
    color: 'red',
    showColor(){
        console.log(this.color)
    }
}
car.showColor() // this ссылка на то, что слева от вызова функции (т.е. car)

// initial try question dress nation wear raise tone spread plunge sun shoulder
console.log(this)
this.name='the name of the page'