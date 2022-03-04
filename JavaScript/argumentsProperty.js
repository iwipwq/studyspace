function multiply(x, y){
    //Symbol.iterator --> object to iteralbe
    let iterator = arguments[Symbol.iterator]();
    console.log(arguments);

    console.log(iterator.next());
    console.log(iterator.next());
    console.log(iterator.next());
    console.log(iterator.next());
    
    return x + y;
}

console.log(multiply());
//Nan
console.log(multiply(1));
//Nan
console.log(multiply(1,2));
//2
console.log(multiply(1,2,3));
//2

function sum() {
    let res = 0;

    for(let i=0; i<arguments.length; i++) {
        res += arguments[i]
    }

    return res;
}

console.log(sum());
console.log(sum(1,2));
console.log(sum(1,2,3));

//Function.prototype.call or Function.prototype.apply
function sum1() {
    const array = Array.prototype.slice.call(arguments);
    return array.reduce(function(prev,curr) {
        return prev + curr;
    }, 0);
}

console.log(sum(1,2));
console.log(sum(1,2,3,4,5));

//ES6 Rest parameter
function sum2(...args) {
    return args.reduce((prev,curr) => prev + curr, 0);
}

console.log(sum(1,2));
console.log(sum(1,2,3,4,5));
