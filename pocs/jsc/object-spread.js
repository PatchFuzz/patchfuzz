let assert = (a) => {
    if (!a)
        throw new Error("Bad Assertion");
}

assert.sameValue = (a, b) =>  {
    print(a === b);
}

function shouldBe(actual, expected) {
    if (actual !== expected)
        throw new Error(`Bad value: ${actual}!`);
}

function print(target, prop, value) {
    shouldBe(target[prop], value);
    let desc = Object.getOwnPropertyDescriptor(target, prop);
    shouldBe(desc.value, value);
    print(desc.enumerable);
    print(desc.writable);
    print(desc.configurable);
}



(() => {
    let obj = {a: 1, b: 2, ...{c: 3, d: 4}};

    print(obj.a, 1);
    print(obj.b, 2);
    print(obj, "c", 3);
    print(obj, "d", 4);
    print(Object.keys(obj), 2);
})();

(() => {
    let o = {c: 3, d: 4};
    let obj = {a: 1, b: 2, ...o};

    print(obj, "a", 1);
    print(obj, "b", 2);
    print(obj, "c", 3);
    print(obj, "d", 4);
    print(Object.keys(obj).length, 4);
})();

(() => {
    let o = {a: 2, b: 3};
    let o2 = {c: 4, d: 5};

    let obj = {...o, ...o2};

    print(obj.a, 2);
    print(obj.b, 3);
    print(obj.c, 4);
    print(obj.d, 5);
    print(Object.keys(obj).length, 4);
})();



(() => {
    let obj = {a: 1, b: 2, ...{}};

    print(obj.a, 1);
    print(obj.b, 2);
    print(Object.keys(obj).length, 2);
})();



(() => {
    let obj = {a: 1, ...null, b: 2, ...undefined, c: 3, ...{}, ...{...{}}, d: 4};

    print(obj.a, 1);
    print(obj.b, 2);
    print(obj.c, 3);
    print(obj.d, 4);

    let keys = Object.keys(obj);
    print(keys[0], "a");
    print(keys[1], "b");
    print(keys[2], "c");
    print(keys[3], "d");
})();



(() => {
    let obj = {a: 1, b: 2, ...null};

    print(obj.a, 1);
    print(obj.b, 2);
    print(Object.keys(obj).length, 2);
})();

(() => {
    let obj = {...null};

    print(Object.keys(obj).length, 0);
})();



(() => {
    let obj = {a: 1, b: 2, ...undefined};

    print(obj.a, 1);
    print(obj.b, 2);
    print(Object.keys(obj).length, 2);
})();

(() => {
    let obj = {...undefined};

    print(Object.keys(obj).length, 0);
})();



(() => {
    let o = {
        get a() {
            return 42;
        }
    };

    let obj = {...o, c: 4, d: 5};

    print(obj, "a", 42);
    print(obj.c, 4);
    print(obj.d, 5);
    print(Object.keys(obj).length, 3);
})();

(() => {
    let o = {a: 2, b: 3}
    let executedGetter = false;

    let obj = {...o, get c() { executedGetter = true; }};

    print(obj.a, 2);
    print(obj.b, 3);
    print(executedGetter, false)
    print(Object.keys(obj).length, 3);
})();

(() => {
    let getterCallCount = 0;
    let o = {
        get a() {
            return ++getterCallCount;
        }
    };

    let obj = {...o, c: 4, d: 5, a: 42, ...o};

    print(obj.a, 2);
    print(obj.c, 4);
    print(obj.d, 5);
    print(Object.keys(obj).length, 3);
})();



(() => {
    var o = { a: 0, b: 1 };
    var cthulhu = { get x() {
      delete o.a;
      o.b = 42;
      o.c = "ni";
    }};

    let obj = {...cthulhu, ...o};

    print(obj.hasOwnProperty("a"), false);
    print(obj.b, 42);
    print(obj.c, "ni");
    print(obj.hasOwnProperty("x"));
    print(Object.keys(obj).length, 3);
})();



(() => {
    let o = {a: 2, b: 3};

    let obj = {a: 1, b: 7, ...o};

    print(obj.a, 2);
    print(obj.b, 3);
    print(Object.keys(obj).length, 2);
    print(o.a, 2);
    print(o.b, 3);
})();

(() => {
    let o = {a: 2, b: 3, c: 4, e: undefined, f: null, g: false};

    let obj = {...o, a: 1, b: 7, d: 5, h: -0, i: Symbol("foo"), j: o};

    print(obj.a, 1);
    print(obj.b, 7);
    print(obj.c, 4);
    print(obj.d, 5);
    print(obj.hasOwnProperty("e"));
    print(obj.f, null);
    print(obj.g, false);
    print(obj.h, -0);
    print(obj.i.toString(), "Symbol(foo)");
    print(Object.is(obj.j, o));
    print(Object.keys(obj).length, 10);
})();



(() => {
    let o = {b: 2};
    Object.defineProperty(o, "a", {value: 1, enumerable: true, writable: false, configurable: true});

    let obj = {...o, a: 3};

    print(obj, "a", 3);
    print(obj, "b", 2);
})();



(() => {
    let executedSetter = false;

    let obj = {set c(v) { executedSetter = true; }, ...{c: 1}};

    print(obj.c, 1);
    print(executedSetter, false);
    print(Object.keys(obj).length, 1);
})();



(() => {
    let o = {};
    Object.defineProperty(o, "b", {value: 3, enumerable: false});

    let obj = {...o};

    print(obj.hasOwnProperty("b"), false)
    print(Object.keys(obj).length, 0);
})();



(() => {
    var calls = []
    var o = { get z() { calls.push('z') }, get a() { calls.push('a') } };
    Object.defineProperty(o, 1, { get: () => { calls.push(1) }, enumerable: true });
    Object.defineProperty(o, Symbol('foo'), { get: () => { calls.push("Symbol(foo)") }, enumerable: true });

    let obj = {...o};

    print(calls[0], 1);
    print(calls[1], "z");
    print(calls[2], "a");
    print(calls[3], "Symbol(foo)");
    print(Object.keys(obj).length, 3);
})();


(() => {
    let symbol = Symbol('foo');
    let o = {};
    o[symbol] = 1;

    let obj = {...o, c: 4, d: 5};

    print(obj[symbol], 1);
    print(obj.c, 4);
    print(obj.d, 5);
    print(Object.keys(obj).length, 2);
})();



(() => {
    try {
        let obj = {...{ get foo() { throw new Error("Getter Exception"); } }};
        print(false);
    } catch(e) {
        print(e.message, "Getter Exception");
    }
})();



(() => {
    var calls = []
    var o = { a: 1, b: 2 };

    let executedGetter = false;
    let executedSetter = false
    let obj = {get a() {executedGetter = true; return this_a;}, ...o, set a(v) { executedSetter = true; this._a = v}};

    obj.a = 3
    print(obj.a, undefined);
    print(!executedGetter);
    print(executedSetter);
})();

(function nonEnumerableSymbol() {
    var __s0 = Symbol("s0");
    var source = {};
    Object.defineProperties(source, {
        [__s0]: {value: 0, enumerable: false},
    });

    var target = {[__s0]: 1, ...target};
    print(target, __s0, 1);
})();

(function dunderProto() {
    var source = {};
    var protoValue = {};
    Object.defineProperty(source, "__proto__", {value: protoValue, enumerable: true});
    var target = {...source};

    print(target, "__proto__", protoValue);
    shouldBe(Object.getPrototypeOf(target), Object.prototype);
})();

(function stringPrimitive() {
    var source = "012";
    var target = {get 0() {}, ["2"]: 22, ...source};

    print(target, 0, "0");
    print(target, 1, "1");
    print(target, 2, "2");
    shouldBe(Object.keys(target).join(), "0,1,2");
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

    var target = {a() {}, b: 11, [__s1]: "foo", ...source, ["d"]: 33};

    shouldBe(ownKeysCalls, 1);
    shouldBe(gopdCalls.map(String).join(), "a,b,c,d,Symbol(s0),Symbol(s1)");
    shouldBe(getCalls.map(String).join(), "a,c,d,Symbol(s1)");

    print(target, "a", 0);
    print(target, "b", 11);
    print(target, "c", 2);
    print(target, "d", 33);

    shouldBe(Reflect.ownKeys(target).map(String).join(), "a,b,c,d,Symbol(s1)");
})();

(function indexedProperties() {
    var source = [0, 1, 2];
    Object.defineProperty(source, "1", {enumerable: false});
    var target = {set ["2"](_v) {}, ...source};

    print(target, "0", 0);
    print(target, "2", 2);
    shouldBe(Object.keys(target).join(), "0,2");
})();

(function CustomAccessor() {
    var source = print();
    var target = {...source};

    print(target, "customValue", source);
    shouldBe(target.customValueGlobalObject, target.customAccessorGlobalObject);
    shouldBe(target.customValueGlobalObject[Symbol.toStringTag], "global");
    print(target, "customAccessor", source);
})();

(function CustomAccessorInNonReifiedPropertyTable() {
    

    var source = print();
    source.testField = 42;
    var target = {...source};

    print(target, "testField", 42);
    print(target, "testStaticAccessor", 42);
})();

(function uncacheableDictionary() {
    var source = {a: 0, b: 1, c: 2};
    Object.defineProperty(source, "c", {enumerable: false});
    print(source);
    var b = 11;
    var target = {get a() {}, b, ...source};

    print(target, "a", 0);
    print(target, "b", 1);
    shouldBe(Object.keys(target).join(), "a,b");
})();
