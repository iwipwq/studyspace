function Person(name) {
    this.name = name;
}

const me = new Person('John');

console.log(me.constructor === Person);
//true

//obj constructor -> object
const obj = new Object();
console.log(obj.constructor === Object);
//true

// add constructor -> Function
const add = new Function('a','b','return a + b');
console.log(add.constructor === Function);
//true

//Object literal
const objLiteral = {};
console.log(objLiteral.constructor === Object);
//true

//function literal
const addLiteral = function (a,b) { return a + b };
console.dir(addLiteral.constructor)
console.log(addLiteral.constructor === Function);

//array literal
const arr = [1, 2, 3];
console.dir(arr.constructor);
console.log(arr.constructor === Array);

//RegExp literal
const regexp = /is/ig;
console.dir(regexp.constructor);
console.log(regexp.constructor === RegExp);

// Object create by Object constructor function
// if !instance -> call OrdinaryObjectCreate
let obj1 = new Object();
console.log(obj);
//{}

//if newtarget !== undefined || Object
// instance -> Foo.prototype -> Object.prototype ----> portotype chain
class Foo extends Object {}
new Foo(); 
//Foo {}

// if instance
// Number object created
obj1 = new Object(123);
console.log(obj);
//Number {123}

//String obeject create
obj1 = new Object('123');
console.log(obj1);
//Stirng {"123"}

// ObjectLiteral object !== made by Object constructor function

// function object made with function declare statement
function foo() {}
console.log(foo.constructor === Function);
//true

// prototype and constructor function must be paired

//  LITERAL     CONSTRUCTOR     PROTOTYPE
//  Object      Object          Object.prototype
//  Function    Function        Function.prototype
//  Array       Array           Array.prototype
//  RegExp      RegExp          RegExp.prototype