var people = (function(){
    var people = ['Carl','Laura']

    //Cache DOM
    var $el = $('#peopleModule')
    var $button = $el.find('button');
    var $input = $el.find('input');
    var $ul = $el.find('ul');
    var template = $el.find('#people-template').html();

    //bind events
    $button.on('click',addPerson);
    $ul.on('click','i.del',deletePerson);

    _render();

    function _render() {
        $ul.html(Mustache.render(template,{ people : people}));
        // pubsub.js의 events 모듈을 이용해 stats 모듈과 분리시키자
        // stats.setPeople(people.length);
        events.emit('peopleChanged', people.length);
        // people모듈은 stats모듈이나 다른 모듈을 상관하지 않는다.
        // 그저 peopleChanged 이벤트를 people.length라는 data와 함께 발생(emit)시킨다.
        // 그러므로 아무 모듈에서도 이 이벤트를 listen할 수 있다.
        //console에서 events.on('peopleChanged',function(count) {
            //alert(count);
        //}) 를 입력해서 구독
        // events.on('peopleChanged',function(count){console.log(count)});도 해보자
    }

    function addPerson(value) {
        var name = (typeof value === "string") ? value : $input.val();
        people.push(name);
        _render();
        $input.val('');
    }

    function deletePerson(event) {
        var i;
        if(typeof event === "number") {
            i = event
        } else {
            console.log(event.target, 'deletePerson event target');
            console.log($(event.target), 'deletePerson event target $element');
            $remove = $(event.target).closest("li");
            i = $ul.find("li").index($remove);
        }
        people.splice(i,1);
        _render();
    }
})();
