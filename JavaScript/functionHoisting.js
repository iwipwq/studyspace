console.dir(add);
// f add(x,y)

console.dir(sub);
// variable initialized
// <- undefined

console.log(add(2,5));

console.log(sub(2,5));
// TypeError: sub is not a function

// function hoisting
function add(x,y) {
    return x + y;
}

// function expression <- recommended
// variable hoisting
var sub = function (x, y) {
    return x - y;
}
// undefined -> f sub(x,y)

console.log(sub(2,5));
console.dir(sub);