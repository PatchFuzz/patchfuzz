load(libdir + "asserts.js");


var target = {};
Object.preventExtensions(target);

var handler = { defineProperty: function (target, name, desc) { return true; } };

for (let p of [new Proxy(target, handler), Proxy.revocable(target, handler).proxy]) {
    assertThrowsInstanceOf(function () {
        Object.defineProperty(p, 'foo', { configurable: true });
    }, TypeError);
}
