function print(a, e, m) {
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
            get: function (obj, prop) {
                arr.push(prop);
                return obj[prop];
            }
        });
    }
}

class Test extends ProxyBase {
    #m() {
        return 3;
    }

    method() {
        return this.#m();
    }
}

let t = new Test();
let r = t.method();
print(r, 3, "Expected: 3 but got: " + r);

print(arr, ['method']);

