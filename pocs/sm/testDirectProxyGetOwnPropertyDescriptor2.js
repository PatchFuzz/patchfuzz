var target = {};
var called;
var handler = {
    getOwnPropertyDescriptor: function (target1, name) {
        print(this, handler);
        print(target1, target);
        print(name, 'foo');
        called = true;
    }
};

for (let p of [new Proxy(target, handler), Proxy.revocable(target, handler).proxy]) {
    called = false;
    Object.getOwnPropertyDescriptor(p, 'foo');
    print(called, true);
}
