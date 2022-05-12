type PlayerA = {
    name:string
}

type PlayerAA = PlayerA & {
    lastName:string
}

const PlayerA: PlayerAA = {
    name:"mario",
    lastName:"lougie"
}
////
interface PlayerB {
    name: string
}

// interface PlayerBB extends PlayerB {
//     lastName:string
// }

interface PlayerB {
    lastName:string
}

interface PlayerB {
    health:number
}

const PlayerB: PlayerB = {
    name:"peach",
    lastName:"princess",
    health:10
}

type PlayerC = {
    firstName:string
}
interface PlayerD {
    firstName:string
}
// class User implements PlayerA {
//     constructor(
//         public firstName:string
//     ) {}
// }
// 상하 모두 가능하지만
// 클래스나 오브젝트의 모양을 정의하고자 할때 interface
// 다른경우엔 type
class User implements PlayerD {
    constructor(
        public firstName:string
    ) {}
}