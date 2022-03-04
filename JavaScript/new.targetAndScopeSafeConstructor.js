// ES6 new.target
// new.target === Object itself
// if (!new Func) -> new.target === undefined
function Circle(radius) {
    if(!new.target) {
        return new Circle(radius);
    }

    this.radius = radius;
    this.getDiameter = function () {
        return 2 * this.radius;
    }
}

const circle = Circle(5);
console.log(circle.getDiameter());

// scope-safe construtor pattern
function Rectangle(width,height) {
    // if (new Func) -> this === new object
    // if (!new Func) -> this === window
    // this, Circle -> disconnected to prototype
    if (!(this instanceof Rectangle)) {
        //return new instance
        return new Rectangle(width,height);
    }

    this.width = width;
    this.height = height;
    this.getAreaOfRectangle = () => {
        return this.width * this.height;
    }
    this.getCircumference = () => {
        return 2 * (this.width + this.height);
    }
    this.getDiagonalLength = () => {
        return Math.log(this.width**2 + this.height**2); 
    }
}

const rectangle = Rectangle(10,100);
console.log(rectangle.getAreaOfRectangle());
console.log(rectangle.getCircumference());
console.log(rectangle.getDiagonalLength());