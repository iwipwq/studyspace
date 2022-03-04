//[[Constructor]]
// no object return
function add(x,y) {
    return x + y;
}

let inst = new add();

console.log(inst);
// {}
//no object returned

// object return
function createUser(name,role) {
    return { name, role };
}

inst = new createUser('Peter','engineer');

console.log(inst);
// {name:'Peter', role:'engineer'}
// object returned

//--------
//[[Call]]
function Circle(radius) {
    this.radius = radius;
    this.getDiameter = function () {
        return 2 * this.radius;
    }
}

const circle = Circle(5);
console.log(circle);
//undefined

//this -> window
console.log(radius);
//5
console.log(getDiameter());
//10

circle.getDiameter();
//TypeError: Cannot read property 'getDiameter' of undefined
