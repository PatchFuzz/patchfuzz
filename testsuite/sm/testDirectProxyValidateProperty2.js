load(libdir + "asserts.js");


var target = {};
Object.defineProperty(target, 'foo', {
    configurable: false,
    enumerable: true
});
var caught = false;
assertThrowsInstanceOf(function () { 
    Object.getOwnPropertyDescriptor(new Proxy(target, {
        getOwnPropertyDescriptor: function (target, name) {
            return {
                configurable: false,
                enumerable: false
            };
        }
    }), 'foo');
}, TypeError);

var target = {};
Object.defineProperty(target, 'foo', {
    configurable: false,
    enumerable: false
});
var caught = false;
assertThrowsInstanceOf(function () { 
    Object.getOwnPropertyDescriptor(new Proxy(target, {
        getOwnPropertyDescriptor: function (target, name) {
            return {
                configurable: false,
                enumerable: true
            };
        }
    }), 'foo');
}, TypeError);
