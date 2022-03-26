// var people = [];
// var template = $('#people-template').html();

// $('#peopleModule').find('button').on('click', function() {
//     people.push($('#peopleModule').find('input').val());
//     $('#peopleModule').find('input').val('');
//     //data for mustache template
//     var data = {
//         people: people,
//     };
//     $('#peopleModule').find('ul').html(Mustache.render(template, data));
// });

// $('#peopleModule').find('ul').delegate('i.del', 'click', function(e) {
//     var $remove = $(e.target).closest('li');
//     var i = $('#poepleModule').find('ul').find('li').index($remove);

//     $remove.remove();

//     people.splice(i, 1);
// });

//object literal
//addy Osamoni
var myModule = {
    nmae: 'Will',
    age: 34,
    //메서드
    sayName: function() {
        alert(this.name);
    },
    setName: function(newName) {
        this.name = newName;
    }
};
//myModule API는 두가지 메서드를 가지고 있다. sayNAme setName
myModule.setName('Me');
myModule.sayName();
// 오브젝트 리터럴 패턴에서는 모든 프로퍼티에 접근할 수 있고, 수정할 수도 있다.
myModule.name = "Will"
myModule.sayName();

//공개모듈패턴은 이러한 프로퍼티들을 숨길 수 있고 접근 할 수 없게 만든다.
// 오직 모듈자신만이 접근 가능하다.