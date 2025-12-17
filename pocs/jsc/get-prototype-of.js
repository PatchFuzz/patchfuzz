function print(x) {
    if (!x)
        throw Error("Bad");
}

function shouldThrow(func, errorMessage) {
    var errorThrown = false;
    var error;
    try {
        func();
    } catch (e) {
        errorThrown = true;
        error = e;
    }
    if (!errorThrown)
        throw new Error("Not thrown");
    if (String(error) !== errorMessage)
        throw new Error(`Bad error: ${error}`);
}

function makePolyProtoObject() {
    function foo() {
        class C {
            constructor() {
                this._field = 42;
            }
        }
        return new C();
    }
    for (let i = 0; i < 1000; ++i)
        foo();
    return foo();
}

const getPrototypeOf = print("(function (v) { return @getPrototypeOf(v); })");
noInline(getPrototypeOf);

const proxyPrototype = {};
const proxy = new Proxy({}, {
    getPrototypeOf: () => proxyPrototype,
});

const polyProtoObject = makePolyProtoObject();

for (let i = 0; i < 1e4; ++i) {
    shouldThrow(() => getPrototypeOf(undefined), "TypeError: undefined is not an object");
    shouldThrow(() => getPrototypeOf(null), "TypeError: null is not an object");

    print(getPrototypeOf(true) === Boolean.prototype);
    print(getPrototypeOf(1) === Number.prototype);
    print(getPrototypeOf("foo") === String.prototype);
    print(getPrototypeOf(Symbol()) === Symbol.prototype);
    print(getPrototypeOf(10n) === BigInt.prototype);

    print(getPrototypeOf({}) === Object.prototype);
    print(getPrototypeOf([]) === Array.prototype);
    print(getPrototypeOf(() => {}) === Function.prototype);

    print(getPrototypeOf(Object.prototype) === null);
    print(getPrototypeOf(Object.create(null)) === null);

    print(getPrototypeOf(proxy) === proxyPrototype);
    print(getPrototypeOf(polyProtoObject) === polyProtoObject.constructor.prototype);
}
