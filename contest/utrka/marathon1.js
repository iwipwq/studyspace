var participant = ["mislav", "stanko", "mislav", "ana"]
var completion = ["stanko", "ana", "mislav"]

function solution(participant, completion) {
    var answer = ''
    let participantLength = participant.length
    const exceptedElements = (element) => typeof(element) == "string" && element == element.toLowerCase() &&20 >= element.length && element.length >= 1;
    if (1 <= participantLength && participantLength <= 10000 && participant.every(exceptedElements)) {
        participant.sort();
        completion.sort();
        console.log(participant);
        console.log(completion);
        for (let index = 0; index < participant.length; index++) {
            const element = participant[index];
            console.log('참가자와 완주자가 같은가?',element !== completion[index]);
            console.log('현재루프색인',index)
            console.log('현재루프값',participant[index]);
            if(element !== completion[index]) {
                answer = element
                return answer;
            }
        }
    }
    return answer;
}
document.querySelector('.result').innerText = solution(participant, completion);