var target = function () {};
var receiver = {};
var handler = {
    apply: function (target1, receiver1, args) {
        print(this, handler);
        print(target1, target);
        print(receiver1, receiver);
        print(args.length, 2);
        print(args[0], 2);
        print(args[1], 3);
    }
}
for (let p of [new Proxy(target, handler), Proxy.revocable(target, handler).proxy])
    p.call(receiver, 2, 3);
