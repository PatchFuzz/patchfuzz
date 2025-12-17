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

for (let p of [new Proxy(target, {}), Proxy.revocable(target, {}).proxy]) {
    print('foo' in p, true);
    print('bar' in p, true);
    print('baz' in p, false);
    print(Symbol() in p, false);
}
