
var target = function () {};
var receiver = {};
var handler = {
    apply: function (target1, receiver1, args) {
        assertEq(this, handler);
        assertEq(target1, target);
        assertEq(receiver1, receiver);
        assertEq(args.length, 2);
        assertEq(args[0], 2);
        assertEq(args[1], 3);
    }
}
for (let p of [new Proxy(target, handler), Proxy.revocable(target, handler).proxy])
    p.call(receiver, 2, 3);
