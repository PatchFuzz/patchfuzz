
var target = {};
var called = false;
var handler = {
    ownKeys: function (target1) {
        assertEq(this, handler);
        assertEq(target1, target);
        called = true;
        return [];
    }
};

for (let p of [new Proxy(target, handler), Proxy.revocable(target, handler).proxy]) {
    assertEq(Object.getOwnPropertyNames(p).length, 0);
    assertEq(called, true);
}
