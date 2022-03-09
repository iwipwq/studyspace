// Custom constructor
// generating when function object created
// [[constructor]]
console.log(Person.prototype);
// {constructor: ƒ}

function Person(name) {
    this.name = name;
}

// arrow function (non-constructor)
const Persona = name => {
    this.name = name;
}

console.log(Persona.prototype);
// undefined

console.log(Person.prototype.__proto__ === Object.prototype)
// true

// Built-In constructor
// Object, String, Number, Function, Array, RegExp, date, Promise
// generating when global object created

// In browser env
window.Object === Object
//true