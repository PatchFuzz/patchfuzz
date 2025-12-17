var p;
var target = function (x, y) {
    print(new.target, p);
    this.foo = x + y;
}

for (p of [new Proxy(target, {}), Proxy.revocable(target, {}).proxy]) {
    var obj = new p(2, 3);
    print(obj.foo, 5);
    print(Object.getPrototypeOf(obj), target.prototype);
}
