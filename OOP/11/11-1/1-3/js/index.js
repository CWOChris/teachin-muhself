class Car {
    constructor(name, year) {
        this.name = name;
        this.year = year;
}
static hello() {
    return `"Hello!!" + ${this.name} + "was produced in" + ${this.year}`;
}
}
let myCar = new Car("Ford", 2014);

Car.hello();
console.log(Car.hello());

// myCar.hello();