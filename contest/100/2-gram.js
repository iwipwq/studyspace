function solve(string) {
    const splitString = string.split('')
    const newString = [];
    splitString.map((char)=> {
        newString.push(char,char)
    })
    splitString.pop()
    splitString.shift()
    splitString.join('')
}