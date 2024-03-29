// Class declaration
class Car {
    constructor(make, model, year) {
        this.make = make;
        this.model = model;
        this.year = year;
    }

    print() {
        console.log(`${this.make} ${this.model} (${this.year})`);
    }
}

let myCar = new Car('bmw',
    '7454li',
    2010);
myCar.print();

/* // Expression
let car = class {

} */

class SportsCar extends Car {
    revEngine() {
        console.log('Vroooom goes the ' + this.model);
    }

}

let mySportsCar = new SportsCar('dodge', 'viper', 2011)
mySportsCar.print();
mySportsCar.revEngine();

myCar.revEngine();