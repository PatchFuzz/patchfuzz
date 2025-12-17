var target = {};
for (var key of ['foo', Symbol('bar')]) {
    var called;
    var handler = {
        has: function (target1, name) {
            print(this, handler);
            print(target1, target);
            print(name, key);
            called = true;
        }
    };
    for (let p of [new Proxy(target, handler), Proxy.revocable(target, handler).proxy]) {
        called = false;
        key in p;
        print(called, true);
    }
}
