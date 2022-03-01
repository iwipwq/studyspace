// empty object
const person = new Object();

// add properties
person.name = 'John Cena';
person.sayHello = function () {
    console.log('And His name is ' + this.name);
}

console.log(person);
person.sayHello();

//String
const strObj = new String('John');
console.log(typeof strObj);
console.log(strObj);

//Number
const numObj = new Number(123);
console.log(typeof numObj);
console.log(numObj);

//Boolean
const boolObj = new Boolean(true);
console.log(typeof boolObj);
console.log(boolObj);

//Function
const func = new Function('x','return x*x');
console.log(typeof func);
console.dir(func);

//Array
const arr = new Array(1,2,3);
console.log(typeof arr);
console.log(arr);

//RegExp
const regExp = new RegExp(/ab+c/i);
console.log(typeof regExp);
console.log(regExp);

//Date
const date = new Date();
console.log(typeof date);
console.log(date);