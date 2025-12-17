;
;
;

function print(actual, expected) {
    print(actual.value, expected.value);
    print(actual.writable, expected.writable);
    print(actual.enumerable, expected.enumerable);
    print(actual.configurable, expected.configurable);
}

function isConstructor(o) {
    try {
        new (new Proxy(o, {construct: () => ({})}));
        return true;
    } catch(e) {
        return false;
    }
}

function print(o, name, arity) {
    var fn = o[name];
    print(Object.getOwnPropertyDescriptor(o, name), {
        value: fn,
        writable: true,
        enumerable: false,
        configurable: true,
    });

    print(typeof fn, "function");
    print(Object.getPrototypeOf(fn), Function.prototype);
    print(isConstructor(fn), false);

    print(arraysEqual(Object.getOwnPropertyNames(fn).sort(), ["length", "name"].sort()), true);

    print(Object.getOwnPropertyDescriptor(fn, "length"), {
        value: arity,
        writable: false,
        enumerable: false,
        configurable: true
    });

    var functionName = typeof name === "symbol"
                       ? String(name).replace(/^Symbol\((.+)\)$/, "[$1]")
                       : name;
    print(Object.getOwnPropertyDescriptor(fn, "name"), {
        value: functionName,
        writable: false,
        enumerable: false,
        configurable: true
    });
}



print(String.prototype, Symbol.iterator, 0);


var iter = ""[Symbol.iterator]();
var iterProto = Object.getPrototypeOf(iter);



print(Object.getPrototypeOf(iterProto),
         Object.getPrototypeOf(Object.getPrototypeOf([][Symbol.iterator]())));


print(arraysEqual(Object.getOwnPropertyNames(iterProto).sort(), ["next"]), true);


print(iterProto, "next", 0);


for (var v of [void 0, null, true, false, "", 0, 1, {}, [], iter, iterProto]) {
    print(iterProto[Symbol.iterator].call(v), v);
}


for (var v of [void 0, null, true, false, "", 0, 1, {}, [], iterProto]) {
    print(() => iterProto.next.call(v), TypeError);
}
