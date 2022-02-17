var participant = ["mislav", "stanko", "mislav", "ana"]
var completion = ["stanko", "ana", "mislav"]

function solution(participant, completion) {
    var answer = ''
    console.log(participant);
    console.log(completion);
    const exceptedElements = (element) => typeof(element) == "string" && 20 >= element.length && element.length >= 1;
    // participant.find( element => element.lenght >)
    console.log(participant.some(exceptedElements));
    if (1 <= participant.length && participant.length <= 10000 && participant.some(exceptedElements)) {
        for (i=0; i<participant.length; i++) {
            console.log(i,'순회아이템',participant[i])
            completion.forEach((element,index) => {
                console.log(index,'번째순회',element);
                console.log(element === participant[i]);
                if(element === participant[i]) {
                    console.log('같은지',element == participant[i]);
                    console.log(participant[i])
                    participant[i] = '';
                    completion[index] = '';
                    console.log('slice 후',answer);
                    console.log('slice 후',completion);
                    console.log('slice 후',participant);
                }
            });               
        }
    }
    console.log(participant);
    answer = participant.join('');
    return answer;
}
document.querySelector('.result').innerText = solution(participant, completion);