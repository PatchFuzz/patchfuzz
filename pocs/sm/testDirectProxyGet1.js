var target = { foo: 'bar' };
for (let p of [new Proxy(target, {}), Proxy.revocable(target, {}).proxy]) {
    print(p.foo, 'bar');
    print(p['foo'], 'bar');
}

var s = Symbol.for("moon");
var obj = {};
obj[s] = "dust";
for (let p of [new Proxy(obj, {}), Proxy.revocable(obj, {}).proxy])
    print(p[s], "dust");
