function Circle(radius) {
    this.radius = radius,
    this.getDiameter = function() {
        return 2 * this.radius;
    }
    return 100;
}
const circle = new Circle();
console.log(circle.getDiameter);
console.log(circle);
// ƒ () {
//    return 2 * this.radius;
//}
//Circle {radius: 1, getDiameter: ƒ}