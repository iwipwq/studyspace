var counter = (function() {

    // private stuff
    let count = 0;

    function print(message) {
        console.log(message + '---' + count)
    }
    // reurn an object
    return {
        // value: count,
        //현재값을 반화하는 카운터
        // 클로저를 형성하기 때문에 사용하지 못함
        get: function() { return count },

        set: function(value) { count = value },

        //증가함수를 반환하는 프로퍼티
        increment: function() {
            count += 1;
            print('After increment: ')
        },

        reset: function() {
            print('Before reset: ');
            count = 0;
            print('After reset: ');
        }
    }

})();

// counter.count -> 접근불가

counter.increment();
counter.increment();
counter.increment();

// 클로저가 만들어짐
// console.log(counter.value);
counter.set(7);
console.log(counter.get());

counter.reset();