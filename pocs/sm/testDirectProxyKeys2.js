var target = {};
var called;
var handler = {
    ownKeys: function (target1) {
        print(this, handler);
        print(target1, target);
        called = true;
        return [];
    }
};

for (let p of [new Proxy(target, handler), Proxy.revocable(target, handler).proxy]) {
    called = false;
    Object.keys(new Proxy(target, handler));
    print(called, true);
}
