//classical inheritance
function Person() {

}

var will = new Person();

//(classical) prototypal
var human = {
    species: "human",
    create: function(values) {
        var instance = Object.create(this);
        // instance.name = name;
        Object.keys(values).forEach(function(key){
            instance[key] = values[key]
        });
        return instance;
    },
    saySpecies: function() {
        console.log(this.species);
    },
    sayName: function() {
        console.log(this.name);
    }
};

var will = human.create('Will');

// var musician = Object.create(human);

// musician.playInstrument = function() {
//     console.log("plays..." + this.instrument);
// };

// var will = Object.create(musician);
// will.name = "Will";
// will.instrument ="Drums";

// will
// will.species // "human"
// will.saySpecies() //human
// will.playInstrument() // plays... Drums

// // will에서 어떤것도 바꾸지 않았지만 name이라는 인수를 human에게 보내 species를 바꿔줌으로서
// // will은 이것을 상속받고 사용할 수 있다.
// human.species = "homo sapiens";
// will.saySpecies() // homo sapiens

var musician = human.create({
    species: "musicians",
    playInstrument: function() {
        console.log('plays' + this.instrument)
    }
});

var will = musician.create({name: "Will", instrument: "Guitar"});
will;
will.saySpecies(); // musicians musician이 human.create메서드로 
//will이 가지고 있던 species: "human"을 override 했다.(값은 계속남아있음)
// create 메서드를 Top-Level 객체에 만들면 자식(상속받는)개체들은 creat로 객체를 계속 생성할 수 있다.