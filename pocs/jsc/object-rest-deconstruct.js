let assert = (e) => {
    if (!e)
        throw Error("Bad assertion!");
}

function shouldBe(actual, expected) {
    if (actual !== expected)
        throw new Error(`Bad value: ${actual}!`);
}

function print(restObj, prop, value) {
    shouldBe(restObj[prop], value);
    let desc = Object.getOwnPropertyDescriptor(restObj, prop);
    shouldBe(desc.value, value);
    print(desc.enumerable);
    print(desc.writable);
    print(desc.configurable);
}


(() => {
    let obj = {x: 1, y: 2, a: 5, b: 3}

    let {a, b, ...rest} = obj;

    print(a === 5);
    print(b === 3);

    print(rest, 'x', 1);
    print(rest, 'y', 2);
})();


(() => {
    let obj = {}

    let {a, b, ...rest} = obj;

    print(a === undefined);
    print(b === undefined);

    print(typeof rest === "object");
})();


(() => {
    let obj = 3;

    let {...rest} = obj;

    print(typeof rest === "object");
})();


(() => {
    let obj = "foo";

    let {...rest} = obj;

    print(typeof rest === "object");
})();


(() => {
    let obj = Symbol("foo");

    let {...rest} = obj;

    print(typeof rest === "object");
})();


(() => {
    let obj = null;

    try {
        let {...rest} = obj;
        print(false);
    } catch (e) {
        print(e.message == "Cannot destructure null or undefined value");
    }

})();


(() => {
    let obj = undefined;

    try {
        let {...rest} = obj;
        print(false);
    } catch (e) {
        print(e.message == "Cannot destructure null or undefined value");
    }

})();


(() => {
    let obj = {a: 3, b: 4};
    Object.defineProperty(obj, "x", { get: () => 3, enumerable: true });

    let {a, b, ...rest} = obj;

    print(a === 3);
    print(b === 4);

    print(rest, 'x', 3);
})();


(() => {
    let obj = {a: 3, b: 4};
    Object.defineProperty(obj, "x", { value: 4, enumerable: false });

    let {...rest} = obj;

    print(rest.a === 3);
    print(rest.b === 4);
    print(rest.x === undefined);
})();


(() => {
    let obj = {};
    Object.defineProperty(obj, "a", { value: 3, configurable: false, enumerable: true });
    Object.defineProperty(obj, "b", { value: 4, writable: false, enumerable: true });

    let {...rest} = obj;

    print(rest.a === 3);
    print(rest.b === 4);

    print(rest, 'a', 3);
    print(rest, 'b', 4);
})();



(() => {

    var o = { x: 1, y: 2, w: 3, z: 4 };
    
    function foo({ x, y, ...rest }) {
        print(x === 1);
        print(y === 2);
        print(rest.w === 3);
        print(rest.z === 4);
    }
    foo(o);
})();



(() => {

    var o = { x: 1, y: 2, w: 3, z: 4 };
    
    (({ x, y, ...rest }) => {
        print(x === 1);
        print(y === 2);
        print(rest.w === 3);
        print(rest.z === 4);
    })(o);
})();


(() => {

    var o = { x: 1, y: 2};
    
    let settedValue;
    let src = {};
    ({...src.y} = o);
    print(src.y.x === 1);
    print(src.y.y === 2);
})();


(() => {

    var o = { x: 1, y: 2};
    
    let settedValue;
    let src = {
        get y() { throw Error("The property should not be accessed"); },
        set y(v) {
            settedValue = v;
        }
    }
    src.y = undefined;
    ({...src.y} = o);
    print(settedValue.x === 1);
    print(settedValue.y === 2);
})();


(() => {

    var a = "foo";
    
    var {[a]: b, ...r} = {foo: 1, bar: 2, baz: 3};
    print(b === 1);
    print(r.bar === 2);
    print(r.baz === 3);
})();


(() => {
    var a = 1;
    var {[a]: b, ...r} = {[a]: 1, b: 2, c: 3};
    print(b === 1);
    print(r[1] === undefined);
    print(r.b === 2);
    print(r.c === 3);
})();


(() => {
    var a = Symbol('a');
    var b = Symbol('a');
    var {[a]: c, ...r} = {[b]: 1, b: 2, c: 3};
    print(c === undefined);
    print(r[b] === 1);
    print(r.b === 2);
    print(r.c === 3);
})();



(() => {
    try {
        throw {foo: 1, bar: 2, baz: 3};
    } catch({foo, ...rest}) {
        print(foo === 1);
        print(rest.bar === 2);
        print(rest.baz === 3);
    }
})();

(function nonEnumerableSymbol() {
    var __s0 = Symbol("s0");
    var __s1 = Symbol("s1");

    var source = {};
    Object.defineProperties(source, {
        [__s0]: {value: 0, enumerable: false},
        [__s1]: {value: 1, enumerable: false},
    });

    var {[__s0]: s0, ...target} = source;

    shouldBe(s0, 0);
    print(!Object.getOwnPropertySymbols(target).length);
})();

(function dunderProto() {
    var source = {};
    var protoValue = {};
    Object.defineProperty(source, "__proto__", {value: protoValue, enumerable: true});
    var {...target} = source;

    print(target, "__proto__", protoValue);
    shouldBe(Object.getPrototypeOf(target), Object.prototype);
})();

(function stringPrimitive() {
    var source = "012";
    var {0: a, ["2"]: c, ...target} = source;

    shouldBe(a, "0");
    shouldBe(c, "2");
    print(target, 1, "1");
    shouldBe(Object.keys(target).join(), "1");
})();

(function ProxyObject() {
    var __s0 = Symbol("s0");
    var __s1 = Symbol("s1");

    var ownKeysCalls = 0;
    var gopdCalls = [];
    var getCalls = [];

    var source = new Proxy({
        [__s0]: "s0", [__s1]: "s1",
        a: 0, b: 1, c: 2, d: 3,
    }, {
        ownKeys: (t) => {
            ++ownKeysCalls;
            return Reflect.ownKeys(t);
        },
        getOwnPropertyDescriptor: (t, key) => {
            gopdCalls.push(key);
            var desc = Reflect.getOwnPropertyDescriptor(t, key);
            if (key === "b" || key === __s0)
                desc.enumerable = false;
            return desc;
        },
        get: (t, key, receiver) => {
            getCalls.push(key);
            return Reflect.get(t, key, receiver);
        },
    });

    var {c, ["d"]: d, ...target} = source;

    shouldBe(ownKeysCalls, 1);
    shouldBe(gopdCalls.map(String).join(), "a,b,Symbol(s0),Symbol(s1)");
    shouldBe(getCalls.map(String).join(), "c,d,a,Symbol(s1)");

    print(target, "a", 0);
    shouldBe(c, 2);
    shouldBe(d, 3);
    shouldBe(Object.keys(target).join(), "a");

    var symbols = Object.getOwnPropertySymbols(target);
    shouldBe(symbols[0], __s1);
    shouldBe(symbols.length, 1);
})();

(function indexedProperties() {
    var source = [0, 1, 2, 3];
    Object.defineProperty(source, "1", {enumerable: false});
    var {2: c, ["3"]: d, ...target} = source;

    print(target, "0", 0);
    shouldBe(Object.keys(target).join(), "0");
})();

(function CustomAccessor() {
    var source = print();
    var {customValueGlobalObject, ...target} = source;

    print(target, "customValue", source);
    print(!target.hasOwnProperty("customValueGlobalObject"));
    shouldBe(customValueGlobalObject[Symbol.toStringTag], "global");
    print(target, "customAccessor", source);
    print(target, "customAccessorGlobalObject", customValueGlobalObject);
})();

(function CustomAccessorInNonReifiedPropertyTable() {
    

    var source = print();
    source.testField = 42;
    var {...target} = source;

    print(target, "testField", 42);
    print(target, "testStaticAccessor", 42);
})();

(function uncacheableDictionary() {
    var source = {a: 0, b: 1, c: 2, d: 3};
    Object.defineProperty(source, "c", {enumerable: false});
    print(source);
    var {b, ["d"]: d, ...target} = source;

    print(target, "a", 0);
    shouldBe(b, 1);
    shouldBe(d, 3);
    shouldBe(Object.keys(target).join(), "a");
})();
