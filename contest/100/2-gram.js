function solve(string) {
    const splitedStringArr = string.split('')
    const newStringArr = [];
    splitedStringArr.forEach((char)=> {
        newStringArr.push(char,char)
    })
    newStringArr.pop()
    newStringArr.shift()
    for(let i=0;i<newStringArr.length-2;i+=2) {
        console.log(`${newStringArr[i]} ${newStringArr[i+1]}`)
    }
}