;


var target = {};
Object.defineProperty(target, 'foo', {
    value: 'bar',
    configurable: false
});
var caught = false;
print(function () { 
    Object.getOwnPropertyDescriptor(new Proxy(target, {
        getOwnPropertyDescriptor: function (target, name) {
            return {
                get: function () {
                    return 'bar';
                },
                configurable: false
            };
        }
    }), 'foo');
}, TypeError);

var target = {};
Object.defineProperty(target, 'foo', {
    value: function () {
        return 'bar';
    },
    configurable: false
});
print(function () { 
    Object.getOwnPropertyDescriptor(new Proxy(target, {
        getOwnPropertyDescriptor: function (target, name) {
            return {
                value: 'bar',
                configurable: false
            };
        }
    }), 'foo');
}, TypeError);
