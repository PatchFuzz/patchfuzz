var target = {};
for (var key of ['foo', Symbol.iterator]) {
    handler = {};
    for (let p of [new Proxy(target, handler), Proxy.revocable(target, handler).proxy]) {
        handler.get =
            function (target1, name, receiver) {
                print(this, handler);
                print(target1, target);
                print(name, key);
                print(receiver, p);
                called = true;
            };
        var called = false;
        print(p[key], undefined);
        print(called, true);
    }
}
