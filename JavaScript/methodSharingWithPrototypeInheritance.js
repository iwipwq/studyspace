// not inherited
function Circle(radius) {
    this.radius = radius;
    this.getArea = function () {
        return Math.PI * this.radius **2;
    }
}

const circle1 = new Circle(1);
const circle2 = new Circle(2);
//Same method but each has one
console.log(circle1.getArea === circle2.getArea);
//false

console.log(circle1.getArea());
console.log(circle2.getArea());

// circle1 { ... getArea()}
// circle2 { ... getArea()}

// inherited 
function GenCircle(radius) {
    this.radius = radius;
}
//binding into GenCircle prototype
GenCircle.prototype.getArea = function () {
    return Math.PI * this.radius ** 2;
}

const genCircle1 = new GenCircle(1);
const genCircle2 = new GenCircle(2);
//Same method, Share within prototype (inherited)
console.log(genCircle1.getArea === genCircle2.getArea);
//true

console.log(genCircle1.getArea());
console.log(genCircle2.getArea());


