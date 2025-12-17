;


var target = {};
Object.defineProperty(target, 'foo', {
    set: function (value) {},
    configurable: false
});
var handler = { get: function (target, name, receiver) { return 'baz'; } };
for (let p of [new Proxy(target, handler), Proxy.revocable(target, handler).proxy])
    print(function () { p['foo'] }, TypeError);
