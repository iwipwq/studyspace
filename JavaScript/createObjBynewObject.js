function Circle(radius) {
    //initialize instance
    //this === instance which will be made by newObject
    this.radius = radius;
    this.getDiameter = function () {
        return 2 * this.radius;
    }
}

// create instance
const circle1 = new Circle(5);
const circle2 = new Circle(10);

console.log(circle1.getDiameter());
console.log(circle2.getDiameter());

const circle3 = Circle(15);
console.log(circle3);
//undefined
console.log(radius)
//15 (this === window)