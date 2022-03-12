// How to make object
// 1. Object Literal
// 2. Object constructor function
// 3. constructor function
// 4. Object.cerate method
// 5. Class

// Prototype Decision
// 1. Object Literal
// var obj = { key:value } -> { key: value }
// chaining between Object constructor function and Object.prototype
const byLiteral = { x:1 };

console.log(byLiteral.constructor === Object);
//true
// obj can access Object.prototype
console.log(byLiteral.hasOwnProperty('x'));
//true

//F.prototype only used at new F time
//function Rabbit() {}
/* default prototype
Rabbit.prototype = { constructor: Rabbit };
*/

// 2. Object constructor function
// {} -> obj.key = value -> { key:value }
const byConstructor = new Object();
byConstructor.x = 1;
console.log(Object === Object.prototype.constructor);
console.log(Object === byConstructor);
console.log(byConstructor.hasOwnProperty('x'));
