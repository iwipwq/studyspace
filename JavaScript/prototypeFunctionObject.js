// Function objects have a prototype
(function () {}).hasOwnProperty('prototype');
//true

// Objects do not have a prototype
({}).hasOwnProperty('prototype');
//false

// case : non constructor
// arrow function
const Person = name =>{
    this.name = name;
}

console.log(Person.hasOwnProperty('prototype'));
//false
console.log(Person.prototype);
//undefined

//ES6 method shorthand
const obj = {
    foo(){}
};

console.log(obj.foo.hasOwnProperty('prototype'));
//false
console.log(obj.foo.prototype);
//undefined

//All object's __proto__ (Object.prototype) === (function(){}).prototype
function Tool(name) {
    this.name = name;
}

const myTool = new Tool('hammer');

console.log(Person.prototype === myTool.__proto__);
//true