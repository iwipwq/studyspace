var counter = (function() {

    // private stuff
    let count = 0;

    function print(message) {
        console.log(`${message} => ${count}`);
    }
    
    // delare function declaration with name
    function getCount() {
        return count;
    }

    function setCount(value) {
        return count = value;
    }

    //증가함수를 반환하는 프로퍼티
    function incrementCount() {
        count += 1;
        print('After increment: ')
    }

    function resetCount() {
        print('Before reset: ');
        count = 0;
        print('After reset: ');
    }

    // reurn an object
    return {
        //"reveals" the public functions
        // clearer presentation
        // however, you can (accidentally) overwrite
        // the property values :/
        // 공개적으로 접근할 수 있는 객체를 반환함으로서 사용가능해지는 private 함수들
        get: getCount,
        set: setCount,
        increment: incrementCount,
        reset: resetCount,
    }

})();
