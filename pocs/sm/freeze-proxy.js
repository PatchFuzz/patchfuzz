var called = [];
var proxy = new Proxy({a: 1, get b() {}}, {
    getOwnPropertyDescriptor(target, P) {
        called.push("getOwnPropertyDescriptor");
        return Object.getOwnPropertyDescriptor(target, P);
    },
    defineProperty(target, P, desc) {
        called.push("defineProperty");
        if (P == "a") {
            print(Object.getOwnPropertyNames(desc).length, 2);
            print(desc.configurable, false);
            print(desc.writable, false);
        } else {
            print(Object.getOwnPropertyNames(desc).length, 1);
            print(desc.configurable, false);
        }
        return Object.defineProperty(target, P, desc);
    }
});

Object.freeze(proxy);
print(called.toString(), "getOwnPropertyDescriptor,defineProperty,getOwnPropertyDescriptor,defineProperty");
