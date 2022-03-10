function mixin(reciever,supplier) {
    Object.keys(supplier).forEach((key) => {
        reciever[key] = supplier[key];
    })
}

function EventTarget() { /*...*/ }
EventTarget.prototype = {
    constructor: EventTarget,
    emit: function(){/*...*/},
    on: function(){/*...*/}    
}

let myObject = {}
mixin(myObject,EventTarget.prototype);
myObject.emit('somethingChange')

//same as

const copiedObject = {}
Object.assign(copiedObject,EventTarget.prototype);
copiedObject.on('on');