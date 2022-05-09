//closure
const x = 1;

function outerFunc() {
    const x = 10;
    function innerFunc() {
        console.log(x); //10
    }

    innerFunc();
}

outerFunc();


////////////
function outerFunc2() {
    const x = 10;
    innerFunc2();
}

function innerFunc2() {
    console.log(x); //1
}

outerFunc2()


///////

function foo() {
   const x = 10;
   bar();
}

function bar() {
    console.log(x);
}

foo();
bar();

class Person {
    constructor() {}
    constructor() {}
}
// err A class may only have one constructor

class Person {} //o
// ===
// class Person {
//     constructor() {}
// }

const me = new Person();
console.log(me); // Person {}

//static -> 정적메서드 - 인스턴스를 생서하지 않아도 호출할 수 있는 메서드

//클래스 필드정의 chrome 72~ nodejs 12~
class Pizza {
    ingredients = 'ananas'
}

const pineapplePizza = new Pizza();
console.log(pineapplePizza);