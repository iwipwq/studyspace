abstract class User {
    constructor (
    protected firstName:string,
    protected lastName:string,
    protected nickName:string,
    private 오직유저안에서만접근가능?:string,
    public 모든곳에서접근가능?:string
) {}
abstract getArg(arg:number):number
abstract getNickName():void

접근할래() {
    console.log(this.오직유저안에서만접근가능,"<-뭐라고나옴?")
    return this.오직유저안에서만접근가능
}

public getLastName() {
    return `$(this.lastName} `
}
private getFullName() {
    return `${this.firstName} ${this.lastName}`
}
}

class Player extends User {

nickname!: string;

getNickName() {
    console.log(this.nickName);
    console.log(this.firstName);
}
getArg(arg:number) {
    console.log(arg)
    return arg
}
}

const ulfric = new Player("Ulfric"," Stormcloak","The rebel","프라이빗이얌","모든곳에공개");
ulfric.nickname
// ulfric.getFullName()
ulfric.getLastName()
ulfric.getNickName()
ulfric.getArg(1)
// ulfric.오직유저안에서만접근가능
ulfric.접근할래()
ulfric.모든곳에서접근가능


abstract class 유저 {
constructor (
      private 오직User안에서만접근가능:string,
    protected 상속하면접근가능:string,
    public 모든곳에서접근가능:string,
    //이것도모든곳에서접근가능:string <- 이건 안됨
  ) {}
  
  // 이렇게는 public없이도 됨
  프라이빗접근하기() {
    console.log(this.오직User안에서만접근가능)
    return this.오직User안에서만접근가능;
}
}

class 플레이어 extends 유저 {

}

const 새플레이어 = new 플레이어 ("오직유저안에서만","상속하면접근가능","모든곳에서접근가능")

// 새플레이어.오직User안에서만접근가능 // error
새플레이어.프라이빗접근하기()
console.log(새플레이어.모든곳에서접근가능,"추상클래스안의프라이빗프로퍼티")