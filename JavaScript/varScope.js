var x = 1;
if (true) {
    var x = 10;
}
console.log(x);

let y = 1;
if(true) {
    let y = 10;
}
console.log(y);

var i = 10;

for (var i = 0; i < 5; i++) {
    console.log(i);
}
console.log(i);

var xx = 1;

function foo() {
    var xx = 10;
    bar();
}

function bar() {
    console.log(xx);
}

foo();
bar();