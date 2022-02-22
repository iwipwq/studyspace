var jobs = [[0, 3], [1, 9], [2, 6]];
// return == 9
// var jbos = [[0, 3],[1, 4],[1, 2],[3, 1],[3, 2]]


function solution(jobs) {
    var answer = 0;
    let prev = 0;
    function getPrev() {

    }
    const sortJobs = []
    const sortSP = []
    const sortPT = []

    function basicComparator(first, second) {
        if (first === second) {
            return 0;
        } else if (first < second) {
            return -1;
        } else {
            return 1;
        }
    }
    
    function compareNthElements(n, comparatorFunction, reverse) {
        return function(first, second) {
            if (reverse === true) {
                return comparatorFunction(second[n], first[n]);
            } else {
                return comparatorFunction(first[n], second[n]);
            }
        }
    }

    jobs.sort(compareNthElements(1, basicComparator,true))
    jobs.sort(compareNthElements(2, basicComparator,true))

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