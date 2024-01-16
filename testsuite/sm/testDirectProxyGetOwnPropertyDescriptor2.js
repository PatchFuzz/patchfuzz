
var target = {};
var called;
var handler = {
    getOwnPropertyDescriptor: function (target1, name) {
        assertEq(this, handler);
        assertEq(target1, target);
        assertEq(name, 'foo');
        called = true;
    }
};

for (let p of [new Proxy(target, handler), Proxy.revocable(target, handler).proxy]) {
    called = false;
    Object.getOwnPropertyDescriptor(p, 'foo');
    assertEq(called, true);
}
