var jobs = [[0, 3], [1, 9], [2, 6]];
// return == 9
// var jbos = [[0, 3],[1, 4],[1, 2],[3, 1],[3, 2]]


function solution(jobs) {
    var answer = 0;
    let prev = 0;
    function getPrev() {

    }
    const sortSP = []
    const sortPT = []
    jobs.sort()
    for (i=0; i<jobs.length; i++) {
        sortSP.push(jobs[i][0])
        
    }
    Math.min(sortSP)
    let curr = (jobs) => {
        const startingPoint = []
        for (i=1; i<jobs.length; i++) {
            if(jobs[i-1][1]>=jobs[i][0]) {
                startingPoint.push(jobs[i][0])
            }
        }
        startingPoint.sort((a, b)=> a - b);
        return startingPoint[length-1]
    }
    return answer;
}