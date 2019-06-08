/*   let car = {
      make: 'bmw',
      model: '745li',
      year: 2010
  }; */

/* function Car(make, model, year) {
    this.make = make;
    this.model = model;
    this.year = year;
}

let myCar = new Car('bmw', '754li', 2010);

console.log(myCar);


let yourCar = new Car('Mercedes', 'S-Class', 2018);
console.log(yourCar); */


function MyFunction() {
    console.log('I am a simple function');
}

let myFunction = new MyFunction();
console.log(typeof myFunction);

// Can't really do amything with this particular
// object...... it's certainly not a functuion
// refrence point anymore.