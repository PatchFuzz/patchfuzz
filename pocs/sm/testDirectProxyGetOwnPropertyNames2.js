var target = {};
var called = false;
var handler = {
    ownKeys: function (target1) {
        print(this, handler);
        print(target1, target);
        called = true;
        return [];
    }
};

for (let p of [new Proxy(target, handler), Proxy.revocable(target, handler).proxy]) {
    print(Object.getOwnPropertyNames(p).length, 0);
    print(called, true);
}
