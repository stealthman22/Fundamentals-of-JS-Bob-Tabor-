function sayHello(name) {
    
    return function() {
        console.log('howdy ' + name);
    } 
}

let bob = sayHello('bob');
let Conrad = sayHello('Conrad');
let Grant = sayHello('Grant');

bob();
Conrad();
Grant();