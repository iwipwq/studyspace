// class Fruit {
//     constructor(name) {
//         this.name = name;
//     }
// }

function Fruit(name) {
    this.name = name;
}

var foo = new Fruit("strawberry");
var bar = new Fruit("banana")
console.log(bar.name);
foo.color = "red";

//Devtool -> Memory -> search 'Fruit'