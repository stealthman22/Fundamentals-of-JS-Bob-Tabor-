/*
let car = {
    make: 'BMW',
    model: '745li',
    year: 2010,
    getPrice: function() {
        //perform some calc
        return 5000;
    },
    printDescription: function() {
        console.log(this.make + ' ' + this.model);
    }
}

car.printDescription();
console.log(car.year);
*/

// Not the best.
//console.log(car['year']);
// Never use this approach.
//console.log(car[1]);  

/*
var anotherCar = {};
anotherCar.whatever = 'bob';
console.log(anotherCar.whatever);
*/

/*
var a = {
    myProperty: {b: 'hi'}
};
console.log(a.myProperty.b);
*/

/*
var c = {
    myProperty: [
        {d: 'this'},
        {e: 'can'},
        {f: 'get'},
        {g: 'crazy'}
    ]
};
*/

/*
let carLot = [
    {year:2017, make:'Toyota', model:'4Runner' },
    {year:2015, make:'BMW', model:'528i' },
    {year:1982, make:'Buick', model:'Skylark' },
];
*/

let contacts = {
    customers: [
        {firstName: 'Bob', lastName: 'Tabor', phoneNumbers: [ '(+234) 8169038122', '(+234) 8027727916' ]  },
        {firstName:  'Richard', lastName: 'Boughton' , phoneNumbers: [  '(+234) 8025525916', '(+234) 7027727916'  ]  },
    ],
    employees: [
        {firstName: 'Grant', lastName: 'Willian', phoneNumbers: [ '(+234) 8169027122', '(+234) 8027817916' ]  },
        {firstName:  'Conrad', lastName: 'Boughton' , phoneNumbers: [  '(+234) 8025522916', '(+234) 7029127916'  ]  },
        {firstName: 'Steve', lastName: 'Tabor', phoneNumbers: [ '(+234) 8169038652', '(+234) 8027724316' ]  },
        {firstName:  'Richard', lastName: 'Dennis' , phoneNumbers: [  '(+234) 8025675916', '(+234) 7020727916'  ]  },
    ]
};

