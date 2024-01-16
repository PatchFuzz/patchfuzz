load(libdir + "asserts.js");


for (var key of ['foo', Symbol.for('quux')]) {
    var target = {};
    Object.defineProperty(target, key, {
        value: 'bar',
        writable: false,
        configurable: false
    });
    var handler = { set: () => true };
    for (let p of [new Proxy(target, handler), Proxy.revocable(target, handler).proxy])
        assertThrowsInstanceOf(() => p[key] = 'baz', TypeError);
}
