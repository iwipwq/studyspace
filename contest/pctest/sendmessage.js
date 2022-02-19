var k = 3;
var m = 50000;
var names = ["msLEE", "jsKim", "jsKIM", "jskiM", "jskim", "John", "john", "John", "msLEE", "msLEE", "jsKIM", "roy"]
var amounts = [950, 52524, 1400, 6055, 10000, 4512, 512, 52000, 9000, 49000, 1400, 50000]

function solution(k, m, names, amounts) {
    var answer = 0;
    let counts = {};
    console.log(names);
    console.log(names.length);
    for (i=0; i<names.length; i++) {
        names[i] = names[i].toLowerCase();
        console.log('카운트이름',counts);
        console.log('카운트값',counts[names[i]]);
        if(counts[names[i]]) {
            counts[names[i]] += 1
            if(counts[names[i]] >= k || amounts[i] >= m) {
                console.log('중복갯수',counts[names[i]])
                console.log('amounts',amounts[i]);
                console.log('ifif메세지송출!',answer);
                answer += 1
                if(counts[names[i]]>=k){
                    counts[names[i]]=0
                }
            }
        } else {
            counts[names[i]] = 1
            console.log('else로 갔을때 amounts',amounts[i])
            if(amounts[i]>=m) {
                console.log('else-if메세지송출!',answer)
                answer += 1
            }
        }
    }
    
    console.log(counts);
    console.log('몇번?',answer)
    
    return answer;
}
solution(k, m, names, amounts);
