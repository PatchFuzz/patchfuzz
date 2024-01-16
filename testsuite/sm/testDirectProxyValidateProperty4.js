load(libdir + "asserts.js");


var target = {};
Object.defineProperty(target, 'foo', {
    value: 'bar',
    writable: false,
    configurable: false
});
assertThrowsInstanceOf(function () { 
    Object.getOwnPropertyDescriptor(new Proxy(target, {
        getOwnPropertyDescriptor: function (target, name) {
            return {
                value: 'bar',
                writable: true,
                configurable: false
            };
        }
    }), 'foo');
}, TypeError);
