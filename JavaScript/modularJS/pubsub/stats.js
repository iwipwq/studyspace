var stats = (function(){
    var people = 0;

    //cache DOM
    var $stats = $('#statsModule');
    var template = $('#stats-template').html();

    //bind events
    //stats에서는 여기서 발생하는 이벤트의 출처를 알 수 없음
    //다른 여러개의 모듈에서 peopleChanged 이벤트를 발생시켜도 이벤트 관리가 용이
    //people.js :21 참고
    events.on('peopleChanged', setPeople);

    //더이상 공개API 역할이 아니기 때문에 _는 빼주어도 된다.
    render();

    function render(){
        console.log(people);
        $stats.html(Mustache.render(template, { people : people }));
    }

    function setPeople(newPeople) {
        people = newPeople;
        render();
    }

    function destroy() {
        $stats.remove();
        events.off('peopleChanged',setPeople);
    }

    // return {
    //     setPeople: setPeople
    // };
    // 모듈 연결이 잘 되었다면 더이상 API를 노출시킬 필요가 없다.
    // pubsub 모듈로 people에서와 마찬가지로 peopleCahnged이벤트에 바인딩만 하면됨 :9줄
    // people에서 emit 하면 people.length 숫자가 데이터로 들어가며 alert과 console.log Stats의 people수가 바뀐다.

    return {
        destroy: destroy
    }

    //console에서 stats.destroy를 실행시키면 스텟모듈은 없어지지만 function 에서 render까지
    //people 모듈에서 emit시키는 모듈에는 영향을 끼치지 않는다.
})();