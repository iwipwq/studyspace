

    var people = {
        people: ["Will", "Laura"],
        // template: $('#people-template').html(), -> 이것도 cahceDOM으로 포함
        //init -> how to kick off the module
        init: function() {
            //this===people
            //peope.cacheDom people. ...
            this.cacheDom();
            this.bindEvents();
            this.render();
        },
        cacheDom: function() {
            console.log(this,'this in cacheDOM');
            //jquery object를 다룰땐 변수명에 $에 붙여서 구분용이하게
            this.$el = $('#peopleModule');
            this.$button = this.$el.find('button');
            this.$input = this.$el.find('input');
            this.$ul = this.$el.find('ul');
            // HTML string이므로 그냥 template
            this.template = this.$el.find('#people-template').html();
            console.log(this.template);
        },
        // 이 함수는 오직 이벤트를 관리하는 역할 하나만 하도록 한다.
        // 이벤트는 바깥에 따로 만드는것이 좋다.
        bindEvents: function() {
            console.log(this)
            //이벤트를 바인딩 할 경우 context가 바뀐다.
            // addPerson의 this 값은 더 이상 people이 아니게 된다.
            // addPerson의 this 값은 이벤트가 바인딩 된 아이템의 값이 된다.
            // 그러므로 addPerson의 this는 this.$button과 같다.
            // 즉 this는 addPerson 안에 들어있는 button값이된다.
            // this.$button.on('click', addPerson); ->err
            // this.$button.on('click', addPerson.bind(this));->Uncaught TypeError: addPerson.bind is not a function
            this.$button.on('click', this.addPerson.bind(this));
            // 삭제이벤트
            this.$ul.delegate('i.del', 'click', this.deletePerson.bind(this));
            
        },
        render: function() {
            console.log(this,'this in render property')
            // What mustache does
            // Mustache.render("hi {{name}}", {name: 'will'}); -> "hi will"
            var data = {
                people: this.people,
            };
            // $('#peopleModule').find('ul').html(Mustache.render(template, data));
            this.$ul.html(Mustache.render(this.template, data));
        },
        addPerson: function(value) {
            console.log(this)
            //people 객체에 인풋값 집어넣기
            // value 값이 아무것도 안들어왔을경우(콘솔에서 people.addPerson('value'))로 접근했을경우
            // 인풋창에서 value값을 가져온다.
            this.people.push(value || this.$input.val());
            console.log(people.people);
            // 다시 랜더링해서 새로운 people값 보여주기
            console.log(this.render);
            this.render();
            // 랜더 후 인풋창에 남아있는 값 빈값으로 초기화시키기
            this.$input.val('');
            // 역할별로 나누어져 있기 때문에 이런식으로 수정이 편리하다.
            // 모듈러코드를 쓰는 가장 큰 이유이다.
            // 모듈 초기화를 신경쓸필요없음 모듈 돔캐싱, 이벤트바인딩 등도
            // 그냥 addPerson(필요한곳)에 특성하나만 추가해주면 됨
            // 그렇게 되면 신경쓸 곳도 addPerson 하나만 신경쓰면 됨
        },
        deletePerson: function(event) {
            alert();
            // closest -> 돔 트리를 위로 탐색하며 가장가까운 요소 탐색
            // event를 인수로 넣어줘야 event.target 사용가능
            var $remove = $(event.target).closest('li');
            // index('selector') selector가 속해있는 부모객체에서 몇번째에 위치해 있는지 숫자 반환
            var i = this.$ul.find('li').index($remove);

            // $remove.remove(); //다른 메서드에서 HTML을 건드리지 않는다. 오직 render에서만 다루게 한다.
            this.people.splice(i, 1);
            this.render();
        }
    }
    
    people.init();



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
