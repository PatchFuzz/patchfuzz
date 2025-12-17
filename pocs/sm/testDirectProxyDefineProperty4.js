;


var handler = { defineProperty: function (target, name, desc) { return true; } };
for (let p of [new Proxy({}, handler), Proxy.revocable({}, handler).proxy]) {
    print(function () {
        Object.defineProperty(p, 'foo', { configurable: false });
    }, TypeError);
}
