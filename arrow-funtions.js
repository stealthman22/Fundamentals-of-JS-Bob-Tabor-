/* let hi = () => {
    console.log('howdy');
}
hi(); */

/* 
let hi = (name) => {
    console.log(`howdy ${name}`)
};
hi('bob'); */

/* let add = (a, b) => {
    return console.log(a + b)
};
add(7, 8); */

//or

let add = (a, b) => {
    return a + b
};
console.log(add(5, 8));
/* 
let names = ['david', 'eddie', 'alex', 'micheal'];
names.map((name) => {
    console.log(`howdy ${name}`)
}); */

/* let names = ['david', 'eddie', 'alex', 'micheal'];
let i = 0;
names.map((name) => {
    i++;
    console.log(`howdy ${name} ${i}!`);
}); */

let names = ['david', 'eddie', 'alex', 'micheal'];
var transformed = names.map((name) => {
    return `howdy ${name}!`
});
console.log(transformed);