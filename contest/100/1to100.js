let s = 0;

for(let i=1; i<=100; i++) {
    console.log(s,'+',i,'=',s+i,'index',i);
    // s = s + i;
    s += i;
}

console.log(s)