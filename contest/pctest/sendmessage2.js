var k = 3;
var m = 50000;
var names = ["msLEE", "jsKim", "jsKIM", "jskiM", "jskim", "John", "john", "John", "msLEE", "msLEE", "jsKIM", "roy"]
var amounts = [950, 52524, 1400, 6055, 10000, 4512, 512, 52000, 9000, 49000, 1400, 50000]

function solution(k, m, names, amounts) {
    var answer = 0;
    let counts = 0;
    console.log(names);
    console.log(names.length);
    for (i=0; i<names.length; i++) {
        names[i] = names[i].toLowerCase();
        if (names[i] === names[i-1]) {
            console.log('네임인덱스',names[i-1]);
            console.log('현재카운트',counts);
            counts += 1
            console.log('카운트추가',counts);
            if(counts >= k || amounts[i] >= m) {
                console.log('메시지전송!')
                answer += 1
                console.log('총메세지전송횟수',answer)
            }
        } else {
            console.log('네임인덱스else',names[i-1]);
            counts = 1;
            if (amounts[i] >= m) {
                answer += 1
                console.log('else-if에서 50000원이상')
            }
        }
    }
    
    console.log(counts);
    
    return answer;
}
solution(k, m, names, amounts);
