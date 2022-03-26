var people = (function(){
    //init 함수가 필요없게 됨 (function())자체가 init
    var people = ["Will", "Laura"]
    
    //cacheDom
    var $el = $('#peopleModule');
    var $button = $el.find('button');
    var $input = $el.find('input');
    var $ul = $el.find('ul');
    var template = $el.find('#people-template').html();
    
    //bind events
    $button.on('click', addPerson);
    $ul.on('click','i.del',deletePerson);
    // $ul.delegate('i.del', 'click', deletePerson);
    // delegate -> deprecated
    // For example, the following .delegate() code:
    // $( "table" ).delegate( "td", "click", function() {
    //   $( this ).toggleClass( "chosen" );
    // });
    
    // is equivalent to the following code written using .on():
    // $( "table" ).on( "click", "td", function() {
    //   $( this ).toggleClass( "chosen" );
    // });

    // 비공개 함수에는 _(언더스코어)를 붙이면 구분이 용이하다.
    _render();
    
    function _render() {
        // What mustache does
        // Mustache.render("hi {{name}}", {name: 'will'}); -> "hi will"
        var data = { people: people };
        $ul.html(Mustache.render(template, data));
    }

    function addPerson(value) {
        // value값에 인자로 객체가오는경우가 있으므로(ex:$button click으로 발생한 event객체)
        var name = (typeof value === "string") ? value : $input.val()
        people.push(name);
        _render();
        $input.val('');
    }

    function deletePerson(event) {
        alert('delegated event invoked');
        // addPerson과 마찬가지로 people.deletePerson(value)로 값이 전달되는 경우와
        // value값에 클릭이벤트로 값이 전달되는 경우를 고려
        var i;
        if (typeof event === "number") {
            i = event;
        } else {
            // closest -> 돔 트리를 위로 탐색하며 가장가까운 요소 탐색
            // event를 인수로 넣어줘야 event.target 사용가능
            var $remove = $(event.target).closest('li');
            // index('selector') selector가 속해있는 부모객체에서 몇번째에 위치해 있는지 숫자 반환
            i = $ul.find('li').index($remove);
        }
        people.splice(i, 1);
        _render();
    }

    //공개스코프
    return {
        addPerson: addPerson,
        deletePerson: deletePerson
    }
})()

//people 로 호출한 경우
// people
// {addPerson: ƒ, deletePerson: ƒ}
//  >addPerson: ƒ addPerson()
//  >deletePerson: ƒ deletePerson(event)
//  >[[Prototype]]: Object

// (function() {
//     // var people = [];
//     // // var template = "{{people}}<li>{{.}}</li>{{/people}}"
//     // var template = "$('#people-template').html();"
       
//     //Bad case of DOM search -> fixed in init()
//     $('#peopleModule').find('button').on('click', function() {
//         people.push($('#peopleModule').find('input').val());
//         $('#peopleModule').find('input').val('');
//         //data for mustache template
//         var data = {
//             people: people,
//         };
//         $('#peopleModule').find('ul').html(Mustache.render(template, data));
//     });
    
//     $('#peopleModule').find('ul').delegate('i.del', 'click', function(e) {
//         var $remove = $(e.target).closest('li');
//         var i = $('#poepleModule').find('ul').find('li').index($remove);
    
//         $remove.remove();
    
//         people.splice(i, 1);
//     });
// })();

// //object literal
// //addy Osamoni
// var myModule = {
//     nmae: 'Will',
//     age: 34,
//     //메서드
//     sayName: function() {
//         alert(this.name);
//     },
//     setName: function(newName) {
//         this.name = newName;
//     }
// };
// //myModule API는 두가지 메서드를 가지고 있다. sayNAme setName
// myModule.setName('Me');
// myModule.sayName();
// // 오브젝트 리터럴 패턴에서는 모든 프로퍼티에 접근할 수 있고, 수정할 수도 있다.
// myModule.name = "Will"
// myModule.sayName();

// //공개모듈패턴은 이러한 프로퍼티들을 숨길 수 있고 접근 할 수 없게 만든다.
// // 오직 모듈자신만이 접근 가능하다.