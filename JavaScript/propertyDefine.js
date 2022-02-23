const character = {};

Object.defineProperty(character,'firstName', {
    value : "John",
    writable : true,
    enumerable : true,
    configurable : true,
});

Object.defineProperty(character,'lastName', {
    value : "Malcovich"
});

let descriptor = Object.getOwnPropertyDescriptor(character, 'firstName');
console.log('firstName descriptor',descriptor);

descriptor = Object.getOwnPropertyDescriptor(character, 'lastName');
console.log('lastName descriptor',descriptor);

//[[Enumerable]] == false
//for...in , Object.keys ->x
console.log(Object.keys(character))

//writable == false
// value 바꾸기 불가
// value 바꾸기 -> 무시됨
character.value = "Steve"

//Configurable == false
// 삭제 불가
// 삭제명령시 무시됨
delete character.lastName;

// configurable == false
// property 변경 불가 -> 에러발생
// Object.defineProperty(character, 'lastName', { enumerable : true})

Object.defineProperty(character, 'fullName', {
    get() {
        return `${this.firstName} ${this.lastName}`
    },

    set(name) {
        [this.firstName, this.lastName] = name.split(' ');
    },
    enumerable : true,
    configurable : true
});

descriptor = Object.getOwnPropertyDescriptor(character, 'fullName');
console.log('fullname',descriptor);

character.fullName = 'John Wick';
console.log('changed',character);