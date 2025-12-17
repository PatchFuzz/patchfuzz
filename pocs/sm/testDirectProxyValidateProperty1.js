;


var target = {};
Object.defineProperty(target, 'foo', {
    configurable: false
});
print(function () {
    Object.getOwnPropertyDescriptor(Proxy(target, {
        getOwnPropertyDescriptor: function (target, name) {
            return {
                configurable: true
            };
        }
    }), 'foo');
}, TypeError);
