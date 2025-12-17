var proto = Object.create(null, {
    'foo': {
        configurable: true
    }
});
var target = Object.create(proto, {
    'bar': {
        configurable: true
    }
});

var handler = { has: () => false };

for (let p of [new Proxy(target, handler), Proxy.revocable(target, handler).proxy]) {
    print('foo' in p, false);
    print('bar' in p, false);
}
