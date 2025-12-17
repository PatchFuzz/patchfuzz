;


var target = {};
Object.defineProperty(target, 'foo', {
    configurable: true
});
Object.preventExtensions(target);

var handler = { has: () => false };
for (let p of [new Proxy(target, handler), Proxy.revocable(target, handler).proxy])
    print(function () { 'foo' in p }, TypeError);
