load(libdir + "asserts.js");


var target = {};
Object.defineProperty(target, 'foo', {
    set: function (value) {
        target.foo = 'bar';
    },
    configurable: false
});
var caught = false;
assertThrowsInstanceOf(function () { 
    Object.getOwnPropertyDescriptor(new Proxy(target, {
        getOwnPropertyDescriptor: function (target, name) {
            return {
                set: function (value) {
                    target.foo = 'baz';
                },
                configurable: false
            };
        }
    }), 'foo');
}, TypeError);
