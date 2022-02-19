const research=["abaaaa", "aaa", "abaaaaaa", "fzfffffffa"]
const n = 2
const k = 2
let counts = [];
//return == a
function solution(research, n, k) {
    var answer = '';
    
    for (i=0; i<research.length; i++) {
        counts[i] = {};
        for (j=0; j<research[i].length; j++) {
            console.log(research[i][j]);
            if (counts[i][research[i][j]]) {
                counts[i][research[i][j]] += 1
            } else {
                counts[i][research[i][j]] = 1
            }
        }
    }
    console.log(counts);
    for (const key in counts) {
        console.log(key,counts[key])
        for (const element in counts[key]){
            console.log('loopelement',element,counts[key][element]);
        }
    }
    return answer;
}
solution(research, n, k);