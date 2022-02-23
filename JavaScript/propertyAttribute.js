const person = {
    firstName : 'Yahik',
    lastName : 'Suhuniap',
    
    get fullName() {
        return `${this.firstName} ${this.lastName}`
    },

    set fullName(name) {
        [this.firstName, this.lastName] = name.split(' ');
    }
}

console.log(person.firstName,person.lastName);

//getter
console.log(fullName)

//setter
person.fullName = 'John Malkovich';
console.log('become malcovich',fullName);

console.log(person.fullName);

let descriptor = Object.getOwnPropertyDescriptor(person, 'firstName');
console.log('data property descriptor',descriptor);

let descriptors = Object.getOwnPropertyDescriptors(person);
console.log(descriptors);

descriptor = Object.getOwnPropertyDescriptor(person,'fullName');
console.log('accessor property descriptor',descriptor);


