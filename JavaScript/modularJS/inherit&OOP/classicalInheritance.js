//classical prototypal
// This going to allow our child to inherit all of the functionality from the parent
function inherits(ctor, superCtor) {
    ctor.super_ = superCtor;
    ctor.prototype = Object.create(superCtor.prototype, {
      constructor: {
        value: ctor,
        enumerable: false,
        writable: true,
        configurable: true
      }
    });
  };
//Facebook example
//생성자이며 메인모듈이므로 대문자로
// without class
var Person = function(name) {
    this.name = name.toLowerCase();
}

// When you created Person
// automaticaly created empty prototype object
Person.prototype.sayName = function() {
    console.log("Hi my name is " + this.name);
}

Person.prototype.shoutName = function() {
    console.log("Hi my name is " + this.name + "!!!");
}

// now john and bobby has access to sayName()
// because they are on the prototype

// ↑↑↑↑↑↑↑↑↑  defining actual module  ↑↑↑↑↑↑↑↑↑
// ↓↓↓↓↓↓↓↓↓   copies of the module   ↓↓↓↓↓↓↓↓↓

// this is how to create 'intances'
var john = new Person();
var bobby = new Person();

john.sayName(); //Hi my name is john
bobby.sayName(); //Hi my name is bobby
john.name = "jonny";

//how to inheritance
// example : create certain type of Person ( friend,Family,unknown ...)
// Person.call(this, name); --> this(Friend)객체에서 name을 인수로 보내
// Person 함수를 실행시키지만 Person객체대신 새 Friend 객체를 생성한다.
// 이후 상속함수로 보내기 위한 작업
// 이 부분이 상속함수의 super_(super pointer)로 들어감 ( Friend는 ctor(constructor)에 Person은 superCtor에)
// Friends.Super_ = Person 호출 가능
var Friend = function(name) {
    Friend.super_.call(this, name);
}

// **if Person change like this** 
// var Person = function(name) {
//     this.name = name.***toLowerCase()***;
// }
// then Friend should be also be changed.
// var Friend = function(name) {
//     this.name = name.toLowerCase(); // <- this gonna 
// } -------> (X) BAD PATTERN

inherits(Friend, Person);

var julia = new Friend("julia","");
julia.sayName();

var Musician = function(name, instrument) {
    Musician.super_.call(this, name);
    this.instrument = instrument;
}

inherits(Musician, Person);

//add method to Musician
//new functionality for Musician class

Musician.prototype.getInstrument = function() {
    console.log(this.instrument);
}

// override shoutName
Musician.prototype.shoutName = function() {
    console.log("DUDE! my name is " + this.name + "!!!!!!");
}

var tom = new Musician("tom","violin")

// 실행시 첫번째 스코프 자기자신(tom)
// sayName() 실행시 tom -> Musician 안에는 sayName메서드가 없음
// -> 프로토타입을 가진 객체로 sayName을 찾으러감 -> Person
// -> Person.prototype.sayName이 있음 -> 실행
// shoutName() 실행시 Musician 안에 shoutName 있네? -> 실행
tom.sayName(); // Hi my name is tom
tom.getInstrument(); // DUDE! my name is tom !!!!!!
tom.shoutName();

// Musician안의 shoutName을 지운다면?
delete Musician.prototype.shoutName //undefined
// 프로토타입체인을 찾아봄 -> Person -> Person.prototype.shoutName -> 실행

// // ****Node.js Prototypal code****
// // https://github.com/nodejs/node-v0.x-archive/blob/master/lib/util.js#L634-L644
// /**
//  * Inherit the prototype methods from one constructor into another.
//  *
//  * The Function.prototype.inherits from lang.js rewritten as a standalone
//  * function (not on Function.prototype). NOTE: If this file is to be loaded
//  * during bootstrapping this function needs to be rewritten using some native
//  * functions as prototype setup using normal JavaScript does not work as
//  * expected during bootstrapping (see mirror.js in r114903).
//  *
//  * @param {function} ctor Constructor function which needs to inherit the
//  *     prototype.
//  * @param {function} superCtor Constructor function to inherit prototype from.
//  */
//  exports.inherits = function(ctor, superCtor) {
//     ctor.super_ = superCtor;
//     ctor.prototype = Object.create(superCtor.prototype, {
//       constructor: {
//         value: ctor,
//         enumerable: false,
//         writable: true,
//         configurable: true
//       }
//     });
//   };