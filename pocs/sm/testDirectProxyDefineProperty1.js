var target;
function testProxy(p, key) {
    Object.defineProperty(p, key, {
        value: 'bar',
        writable: true,
        enumerable: false,
        configurable: true
    });
    var desc = Object.getOwnPropertyDescriptor(target, key);
    print(desc.value, 'bar');
    print(desc.writable, true);
    print(desc.enumerable, false);
    print(desc.configurable, true);
}

for (var key of ['foo', Symbol("quux")]) {
    target = {};
    testProxy(new Proxy(target, {}), key);
    target = {};
    testProxy(Proxy.revocable(target, {}).proxy, key);
}
