var target = {};
Object.defineProperty(target, 'foo', {
    value: 'bar',
    writable: true,
    enumerable: false,
    configurable: true
});

var desc = {
    value: 'baz',
    writable: false,
    enumerable: true,
    configurable: true
};
var handler = { getOwnPropertyDescriptor: function () { return desc; } };
for (let p of [new Proxy(target, handler), Proxy.revocable(target, handler).proxy]) {
    var desc1 = Object.getOwnPropertyDescriptor(p, 'foo');
    print(desc1 == desc, false);
    print(desc1.value, 'baz');
    print(desc1.writable, false);
    print(desc1.enumerable, true);
    print(desc1.configurable, true);
}


desc = { configurable : true };
for (let p of [new Proxy(target, handler), Proxy.revocable(target, handler).proxy]) {
    var desc1 = Object.getOwnPropertyDescriptor(p, 'foo');
    print(desc1 == desc, false);
    print(desc1.value, undefined);
    print(desc1.writable, false);
    print(desc1.enumerable, false);
    print(desc1.configurable, true);
}
