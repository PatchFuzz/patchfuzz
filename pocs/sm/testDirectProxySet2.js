var target = {};
for (var key of ['foo', Symbol.for('quux')]) {
    var handler = { };
    for (let p of [new Proxy(target, handler), Proxy.revocable(target, handler).proxy]) {
        handler.set = function (target1, name, val, receiver) {
            print(this, handler);
            print(target1, target);
            print(name, key);
            print(val, 'baz');
            print(receiver, p);
            called = true;
        }

        var called = false;
        p[key] = 'baz';
        print(called, true);
    }
}
