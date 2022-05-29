function solve(string) {
    // if(string.length <= 1) return console.log(string,'Please enter only two or more character strings');
    // const splitedStringArr = string.split('')
    // const newStringArr = [];
    // splitedStringArr.forEach((char)=> {
    //     newStringArr.push(char,char)
    // })
    // newStringArr.pop()
    // newStringArr.shift()
    // for(let i=0;i<newStringArr.length-1;i+=2) {
    //     console.log(`${newStringArr[i]} ${newStringArr[i+1]}`)
    // }
    for(let i=0;i<string.length-1;i++) {
        console.log(`${string[i]} ${string[i+1]}`)
    }
}