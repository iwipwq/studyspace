function changeVal(primitive, obj) {
    primitive += 100;
    console.log(primitive);
    // <- 200
    // num += 100;
    obj.name = 'So'
}

var num = 100;
var person = { name : 'Sus'};

console.log(num);
//100
console.log(person);
// {name : 'Sus'}

// primitive value -> pass by value
// object -> pass by reference (sharing)
changeVal(num, person);

console.log(num); 
//100

console.log(person);
// {name: 'So'}