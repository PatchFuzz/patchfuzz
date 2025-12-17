;

var p;
var target = function () {};
var handler = {
    construct: function (target1, args, newTarget) {
        print(this, handler);
        print(target1, target);
        print(args.length, 2);
        print(args[0], 2);
        print(args[1], 3);
        print(newTarget, p);
    }
}
for (p of [new Proxy(target, handler), Proxy.revocable(target, handler).proxy])
    print(function () {new p(2, 3)}, TypeError);
