document.getElementById('myButton').addEventListener('click', function() {
    console.log("clicked");
})

setTimeout(function() {
    console.log('1sec');
},1000);

var res = [1, 2, 3].map(item => item * 2);
console.log(res);
// [2,4,6]

res = [1, 2, 3].filter(item => item % 2);
console.log(res);
// [1,3]

res = [1, 2, 3].reduce((prev,curr) => prev + curr, 0);
console.log(res);
// 6
