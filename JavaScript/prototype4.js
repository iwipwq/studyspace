function Rabbit() {}
Rabbit.prototype = {
  eats: true
};

let rabbit = new Rabbit();

Rabbit.prototype.eats = false;

alert( rabbit.eats );
// false

//undefined
rabbit.eats
//false
Rabbit.prototype.eats = true
//true
rabbit.eats
//true
rabbit.__proto__ === Rabbit.prototype
//true
Rabbit.prototype
//{eats: true}eats: true[[Prototype]]: Object
Rabbit.prototype = {}
//{}
Rabbit.prototype
//{}[[Prototype]]: Object
rabbit.eats
//true
Rabbit.prototype.eats = true;
//true
Rabbit.prototype = {}
//{}
Rabbit.prototype.eats = false;
//false
rabbit.eats
//true
rabbit.__proto__
//{eats: true}
rabbit.__proto__ === Rabbit.prototype
//false
Rabbit.prototype
//{eats: false}
rabbit.__proto__
//{eats: true}
rabbit.__proto__.eats
//true
rabbit.__proto__.eats = false
//false
Rabbit.prototype === rabbit.__proto__
//false
rabbit.__proto__
//{eats: false}
Rabbit.prototype
//{eats: false}