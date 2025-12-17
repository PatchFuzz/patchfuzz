;


var target = {};
Object.defineProperty(target, 'foo', {
    enumerable: true,
    configurable: false
});

var handler = { ownKeys: () => [] };
for (let p of [new Proxy(target, handler), Proxy.revocable(target, handler).proxy])
    print(() => Object.keys(p), TypeError);
