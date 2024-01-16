load(libdir + "asserts.js");


var target = {};
Object.defineProperty(target, 'foo', {
    get: function () {
        return 'bar';
    },
    configurable: false
});
var caught = false;
assertThrowsInstanceOf(function () { 
    Object.getOwnPropertyDescriptor(new Proxy(target, {
        getOwnPropertyDescriptor: function (target, name) {
            return {
                get: function () {
                    return 'baz';
                },
                configurable: false
            };
        }
    }), 'foo');
}, TypeError);
