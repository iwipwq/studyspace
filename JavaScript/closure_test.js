let x = 1;

const parentFunction = () => {
    let myValue = 2;
    console.log(x);
    console.log(myValue);

    const childFunction = () => {
        console.log(x += 5);
        console.log(myValue += 1);
    }

    return childFunction;
}

const result = parentFunction();
console.log(result);

result();
result();
result();

for (let i=0; i<=10; i++) {
    setTimeout(() => {
        console.log(i)
    }, 100);
}

for (var i=0; i<=10; i++) {
    debugger;
    setTimeout(() => {
        console.log(i)
    }, 100);
}

for (var i=0; i<=10; i++) {
    (function(x){
        setTimeout(()=> {
            console.log(x);
        }, 100)
    }(i))
}

const iterator = function() {
    for (var i=0; i<=10; i++) {
        setTimeout(() => {
            console.log(i)
        }, 100);
    }
}

iterator();
iterator();
iterator();

const varIterator = function() {
    for (var i=0; i<=10; i++) {
        setTimeout(() => {
            console.log(i)
        }, 100);
    }
}

varIterator();
varIterator();
varIterator();

function c1(a,b) {
    // debugger;
    var _a = a
    var _b = b
    return function c1_1(param){
        console.log(_a + _b,param);
    }
}

c1

c1(1,2)

c1(1,2)();
c1(1,2)("hi");

c1(1,2)(c1(1,2)());


function c2(a,b) {
    return function(){
        return a + b;
    }
}

function c3(a,b) {
    function plus() {
        console.log(a + b);
    }
    function multiply() {
        console.log(a * b);
    }
    return (plus,multiply);
}

c3(1,2)()