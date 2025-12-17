;


var target = {};
Object.defineProperty(target, 'foo', {
    value: 'bar',
    writable: false,
    configurable: false
});
var caught = false;
print(function () { 
    Object.getOwnPropertyDescriptor(new Proxy(target, {
        getOwnPropertyDescriptor: function (target, name) {
            return {
                value: 'baz',
                writable: false,
                configurable: false
            };
        }
    }), 'foo');
}, TypeError);
