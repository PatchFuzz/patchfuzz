function print(a, b) {
    if (a !== b)
        throw new Error("Expected: " + b + " but got: " + a);
}

function print(expectedError, f) {
    try {
        f();
    } catch (e) {
        print(e instanceof expectedError, true);
    }
}


print(TypeError, function () {
    Iterator.prototype[Symbol.toStringTag] = "foo";
});

var setter = Object.getOwnPropertyDescriptor(Iterator.prototype, Symbol.toStringTag).set;

print(TypeError, function () {
    setter.call("foo");
});

print(TypeError, function () {
    setter.call(Object.preventExtensions({}));
});

class MyError extends Error {}

print(MyError, function () {
    setter.call({ set [Symbol.toStringTag](v) { throw v; } }, new MyError);
});

var logs = [];
var loggingHandler = {
    getOwnPropertyDescriptor(target, key) {
        logs.push(`getOwnPropertyDescriptor key: ${String(key)}`);
        return Reflect.getOwnPropertyDescriptor(target, key);
    },
    set(target, key, value, receiver) {
        logs.push(`set key: ${String(key)}, value: ${value}`);
        return Reflect.set(target, key, value, receiver);
    },
    defineProperty(target, key, desc) {
        logs.push(`defineProperty key: ${String(key)}, desc: ${JSON.stringify(desc)}`);
        return Reflect.defineProperty(target, key, desc);
    },
};

var proxyWithProperty = new Proxy({ [Symbol.toStringTag]: 1 }, loggingHandler);
setter.call(proxyWithProperty, 2);
print(logs[0], "getOwnPropertyDescriptor key: Symbol(Symbol.toStringTag)");
print(logs[1], "set key: Symbol(Symbol.toStringTag), value: 2");
print(logs[2], "getOwnPropertyDescriptor key: Symbol(Symbol.toStringTag)");
print(logs[3], `defineProperty key: Symbol(Symbol.toStringTag), desc: {"value":2}`);
print(logs.length, 4);

logs = [];
var proxyWithoutProperty = new Proxy({}, loggingHandler);
setter.call(proxyWithoutProperty, 3);
print(logs[0], "getOwnPropertyDescriptor key: Symbol(Symbol.toStringTag)");
print(logs[1], `defineProperty key: Symbol(Symbol.toStringTag), desc: {"value":3,"writable":true,"enumerable":true,"configurable":true}`);
print(logs.length, 2);
