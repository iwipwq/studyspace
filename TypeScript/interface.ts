// type Nickname = string
// type HealthBar = number
// type Friends = Array<string>

// type Player = {
//     nickname:Nickname,
//     healthBar:HealthBar
// }

// const mario : Player = {
//     nickname:"mario",
//     healthBar:10
// }

// type Enemy = string;

// const goomba: Enemy = "The first enemy players encounter."


type Team = "red" | "blue" | "yellow"
type Health = 1 | 5 | 10 

// type Player = {
//     nickname: string,
//     team:Team
//   	health: Health
// }

// const mario :Player = {
//     nickname: "mario",
//     team:"red",
//     health: 5
// }

// interface Player {
//     nickname: string
//     team:Team
//     health: Health
// }

// interface Hello = string

// // const mario :Player = {
// //     nickname: "mario",
// //     team:"red",
// //     health: 5
// // }


// interface User {
//     name:string
// }

// interface Player extends User{
// }

// const mario: Player = {
//     name:"mario"
// }

// interface User {
//     name:string,
// }

// interface User {
//     lastName:string
// }

// interface User {
//     health:number
// }
// const mario: User =  {

// }


// abstract class User {
//     constructor(
//         protected firstName:string,
//         protected lastName:string,
//     ) {}
//     abstract sayHi(name:string):string
//     abstract fullName():string
// }

// class Player extends User {
//     sayHi(name:string) {
//         return `hello ${name}. My name is ${this.fullName()}`
//     }
//     fullName() {
//         return `${this.firstName} ${this.lastName}`
//     }
// }

interface User {
    firstName:string,
    lastName:string,
    sayHi(name:string):string
    fullName():string
}
interface Human {
    health:number
}
class Player implements User, Human {
    constructor (
        public firstName:string,
        public lastName:string,
        public health:number
    ) {}
    fullName() {
        return `${this.firstName} ${this.lastName}`
    }
    sayHi(name:string){
        return `Hello ${name}. My name is ${this.fullName()}`
    }
}

// function makeUser(user: User) {
//     return "hi"
// }

// makeUser({
//     firstName:"spongeBob",
//     lastName:"squrePants",
//     fullName: () => "abc",
//     sayHi: (name:string) => "string" 
// })

function makeUser(user: User) :User {
    return {
        firstName:"spongeBob",
        lastName:"squrePants",
        fullName: () => "abc",
        sayHi: (name:string) => "string" 
    }
}

makeUser({
    firstName:"spongeBob",
    lastName:"squrePants",
    fullName: () => "abc",
    sayHi: (name:string) => "string" 
})