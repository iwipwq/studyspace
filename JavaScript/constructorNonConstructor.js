// constructor --> function statement, function expression, Class
// non-constructor --> method(ES6 shorthand), arrow function

function foo () {}
const bar = function () {};

//not method
const baz = {
    x: function () {}
};

new foo();
// foo {}
new bar();
// bar {}
new baz.x();
// x {}

const arrow = ()=>{};

new arrow();
// TypeError: arrow is not a constructor

// method(ES6 method shorthand)
const obj = {
    x() {}
};

new obj.x();
// TypeError: obj.x is not a constructor