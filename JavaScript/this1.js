//1.메소드
var myObject = {
    name: "foo",
    sayName: function() {
      console.log(this);
    }
  };
  myObject.sayName();
  // console> Object {name: "foo", sayName: sayName()}


//2. 함수 호출
var value = 100;
var myObj = {
  value: 1,
  func1: function() {
    console.log(`func1's this.value: ${this.value}`);

    var func2 = function() {
      console.log(`func2's this.value ${this.value}`);
    };
    func2();
  }
};

myObj.func1();
// console> func1's this.value: 1
// console> func2's this.value: 100


//3 . 생성자
var Person = function(name) {
    console.log(this);
    this.name = name;
  };
  
var foo = new Person("foo"); // Person
console.log(foo.name); // foo


// 4.bind
var value = 100;
var myObj = {
  value: 1,
  func1: function() {
    console.log(`func1's this.value: ${this.value}`);

    var func2 = function(val1, val2) {
      console.log(`func2's this.value ${this.value} and ${val1} and ${val2}`);
    }.bind(this, `param1`, `param2`);
    func2();
  }
};

myObj.func1();
// console> func1's this.value: 1
// console> func2's this.value: 1 and param1 and param2

// 5.call
var value = 100;
var myObj = {
  value: 1,
  func1: function() {
    console.log(`func1's this.value: ${this.value}`);

    var func2 = function(val1, val2) {
      console.log(`func2's this.value ${this.value} and ${val1} and ${val2}`);
    };
    func2.call(this, `param1`, `param2`);
  }
};

myObj.func1();
// console> func1's this.value: 1
// console> func2's this.value: 1 and param1 and param2



// 6.apply
var value = 100;
var myObj = {
  value: 1,
  func1: function() {
    console.log(`func1's this.value: ${this.value}`);

    var func2 = function(val1, val2) {
      console.log(`func2's this.value ${this.value} and ${val1} and ${val2}`);
    };
    func2.apply(this, [`param1`, `param2`]);
  }
};

myObj.func1();
// console> func1's this.value: 1
// console> func2's this.value: 1 and param1 and param2

//7. 화살표함수
function Person(){
    this.age = 0;
  
    setInterval(() => {
      this.age++; // |this|는 person 객체를 참조
    }, 1000);
  }
  
  var p = new Person();