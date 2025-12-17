function print(a, e, m) {
    m = m || "Expected: " + e + " but got: " + a;
    if (a !== e)
        throw new Error(m);
}

function print(a, e) {
    print(a.length, e.length, "Size of arrays doesn't match");
    for (var i = 0; i < a.length; i++)
        print(a[i], e[i], "a[" + i + "] = " + a[i] + " but e[" + i + "] = " + e[i]);
}

let arr = [];

class ProxyBase {
    constructor() {
        return new Proxy(this, {
            defineProperty: function (target, key, descriptor) {
                arr.push(key);
                print(descriptor.enumerable, true);
                print(descriptor.configurable, true);
                print(descriptor.writable, true);
                return Reflect.defineProperty(target, key, descriptor);
            }
        });
    }
}

class Test extends ProxyBase {
  f = 3;
  g = "test";
}

let t = new Test();
print(t.f, 3);
print(t.g, "test");

print(arr, ["f", "g"]);
