load(libdir + "asserts.js");


var target = {};
Object.defineProperty(target, 'foo', {
    get: function () {
        return 'bar'
    },
    configurable: false
});

var handler = { set: () => true };
for (let p of [new Proxy(target, handler), Proxy.revocable(target, handler).proxy])
    assertThrowsInstanceOf(() => p['foo'] = 'baz', TypeError);
