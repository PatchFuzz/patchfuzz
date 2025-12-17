function print(a, message) {
    if (!a)
        throw new Error(message);
}

function shallowEquals(a, b) {
    if (Array.isArray(a) !== Array.isArray(b))
        return false;
    if (Array.isArray(a)) {
        let aLen = a.length | 0;
        let bLen = a.length | 0;
        if (aLen === bLen) {
            for (let i = 0; i < aLen; ++i) {
                if (a[i] !== b[i])
                    return false;
            }
            return true;
        }
    }
    return a === b;
}

assert.same = function(a, b, message) {
    let msg = message ? `. ${message}` : "";
    print(shallowEquals(a, b), `Expected ${a} to equal ${b}${msg}`);
}

assert.not = function(a, message) {
    print(!a, message);
}

function makeComputedKey(options = {}) {
    let { toString, valueOf, toPrimitive } = options;
    let hasToPrimitive = options.hasOwnProperty("toPrimitive");
    function toPrimitiveFn() {
        order.push(`call @@toPrimitive() -> ${toPrimitive}`);
        return toPrimitive;
    }

    function toStringFn() {
        order.push(`call toString() -> ${toString}`);
        return toString;
    }

    function valueOfFn() {
        order.push(`call valueOf() -> ${valueOf}`);
        return valueOf;
    }

    return {
        get [Symbol.toPrimitive]() {
            order.push(`load @@toPrimitive`);
            this.toPrimitiveLoaded++;
            return hasToPrimitive ? toPrimitiveFn : void 0;
        },
        get toString() {
            order.push(`load toString`);
            return toStringFn;
        },
        get valueOf() {
            order.push(`load valueOf`);
            return valueOfFn;
        },
    };
}

let object = { toString() { return "object"; } };
let order = [];
class Base {
    constructor() {
        order.push("construct Base");
        return new Proxy(this, {
            defineProperty(target, p, desc) {
                order.push(`defineProperty ${p}`);
                return Reflect.defineProperty(target, p, desc);
            }
        });
    }
}

let computedKey = makeComputedKey({ toString: "test" });
print(order, []);
class BasicTPK extends Base {
    [computedKey] = "basic";
}

print(order, ["load @@toPrimitive", "load toString", "call toString() -> test"]);
order.length = 0;
let instance = new BasicTPK;
print(order, ["construct Base", "defineProperty test"]);
print(instance.test, "basic");


order.length = 0;
computedKey = makeComputedKey({ toString: object, valueOf: null });
instance = new BasicTPK;
print(instance.test, "basic");
print(instance.hasOwnProperty("null"));
print(order, ["construct Base", "defineProperty test"]);

order.length = 0;
class BasicTPK2 extends Base {
    [computedKey] = "valueOf";
}
instance = new BasicTPK2;
print(instance.hasOwnProperty("test"));
print(instance.null, "valueOf");
print(order, [
    "load @@toPrimitive",
    "load toString",
    "call toString() -> object",
    "load valueOf",
    "call valueOf() -> null",
    "construct Base",
    "defineProperty null"
]);


order.length = 0;
computedKey = makeComputedKey({ toPrimitive: "bingo" });
class ExoticTPK {
    [computedKey] = "exotic";
}

print(order, ["load @@toPrimitive", "call @@toPrimitive() -> bingo"]);
order.length = 0;
instance = new ExoticTPK;
print(order, ["construct Base", "defineProperty bingo"]);
print(instance.bingo, "exotic");
