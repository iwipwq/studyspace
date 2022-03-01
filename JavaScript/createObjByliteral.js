const circle1 = {
    radius: 5,
    getDiameter() {
        return 2 * this.radius;
    }
};

console.log(circle1.getDiameter());
// 10

const circle2 = {
    radius: 10,
    getDiameter() {
        return 2 * this.radius;
    }
}

console.log(circle2.getDiameter());
// 20

const circle3 = {
    radius: 15,
    getDiameter() {
        return 2 * radius;
    }
}
console.log(circle3.getDiameter());
// Uncaught ReferenceError: radius is not defined