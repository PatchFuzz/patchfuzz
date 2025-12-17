var target = {};
Object.defineProperty(target, 'foo', {
    value: 'bar',
    writable: true,
    enumerable: false,
    configurable: true
});

for (let p of [new Proxy(target, {}), Proxy.revocable(target, {}).proxy]) {
    var desc = Object.getOwnPropertyDescriptor(p, 'foo');
    print(desc.value, 'bar');
    print(desc.writable, true);
    print(desc.enumerable, false);
    print(desc.configurable, true);
}

var proto = {};
Object.defineProperty(proto, 'foo', {
    value: 'bar',
    writable: true,
    enumerable: false,
    configurable: true
});
var target = Object.create(proto);
for (let p of [new Proxy(target, {}), Proxy.revocable(target, {}).proxy])
    print(Object.getOwnPropertyDescriptor(p, 'foo'), undefined);
