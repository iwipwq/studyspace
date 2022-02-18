const progress = [95,90,99,99,80,99];
const workSpeed = [1,1,1,1,1,1]

function solve(progress,workSpeed) {
    const result = [];
    let completionDate = 0;
    for (i=0; i<progress.length; i++) {
        const deployDate = (100 - progress[i]) / workSpeed[i]
        if(completionDate > deployDate) {
            completionDate = deployDate;
            result.push(1);
        } else if (completionDate < deployDate) {
            result[result.length - 1] + 1;
        }
    }
    return result;
}