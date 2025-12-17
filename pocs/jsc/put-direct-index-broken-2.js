function print(b) {
    if (!b)
        throw new Error("Bad assertion");
}

function test(f) {
    for (let i = 0; i < 1000; ++i) {
        f();
    }
}

let __oldDesc = null;
let __localLength;
function makeLengthWritable() {
    print(__oldDesc === null);
    __oldDesc = Object.getOwnPropertyDescriptor(Uint8ClampedArray.prototype.__proto__, "length");
    print(typeof __oldDesc.get === "function");
    Reflect.defineProperty(Uint8ClampedArray.prototype.__proto__, "length", {configurable:true, get() { return __localLength; }, set(x) { __localLength = x; }});
}

function restoreOldDesc() {
    print(__oldDesc !== null);
    Reflect.defineProperty(Uint8ClampedArray.prototype.__proto__, "length", __oldDesc);
    __oldDesc = null;
}

test(function() {
    "use strict";
    let a = [];
    a.push(300);
    a.length = 4277;

    let x = new Uint8ClampedArray;
    a.__proto__ = x;
    let err = null;
    try {
        let y = Array.prototype.map.call(a, x => x);
    } catch(e) {
        err = e;
    }
    print(!err);
});

test(function() {
    let a = [];
    for (let i = 0; i < 100; i++) {
        a.push(i);
    }
    a.length = 4277;
    let x = new Uint8ClampedArray;
    a.__proto__ = x;
    let err = null;
    try {
        let y = Array.prototype.filter.call(a, x => true);
    } catch(e) {
        err = e;
    }
    print(err.toString() == "TypeError: Attempting to store out-of-bounds property on a typed array at index: 0");
});

test(function() {
    let a = [];
    for (let i = 0; i < 100; i++) {
        a.push(i);
    }
    a.length = 4277;
    let x = new Uint8ClampedArray;
    a.__proto__ = x;
    let err = null;
    let y = Array.prototype.filter.call(a, x => false);
    print(y instanceof Uint8ClampedArray);
});

test(function() {
    let a = [];
    for (let i = 0; i < 100; i++) {
        a.push(i);
    }
    a.length = 4277;
    let x = new Uint8ClampedArray;
    a.__proto__ = x;

    let err = null;
    try {
        let y = Array.prototype.slice.call(a, 0);
    } catch(e) {
        err = e;
    }
    print(err.toString() === "TypeError: Attempted to assign to readonly property.");
});

test(function() {
    let a = [];
    for (let i = 0; i < 100; i++) {
        a.push(i);
    }
    a.length = 4277;
    let x = new Uint8ClampedArray;
    a.__proto__ = x;

    makeLengthWritable();
    let y = Array.prototype.slice.call(a, 100);
    print(y.length === 4277 - 100);
    print(y.length === __localLength);
    print(y instanceof Uint8ClampedArray);
    restoreOldDesc();
});

test(function() {
    let a = [];
    for (let i = 0; i < 100; i++) {
        a.push(i);
    }
    a.length = 4277;
    let x = new Uint8ClampedArray;
    a.__proto__ = x;

    makeLengthWritable();
    let y = Array.prototype.splice.call(a);
    print(y.length === __localLength);
    print(y.length === 0);
    restoreOldDesc();
});

test(function() {
    let a = [];
    for (let i = 0; i < 100; i++) {
        a.push(i);
    }
    a.length = 4277;
    let x = new Uint8ClampedArray;
    a.__proto__ = x;

    let err = null;
    try {
        let y = Array.prototype.splice.call(a, 0);
    } catch(e) {
        err = e;
    }
    print(err.toString() === "TypeError: Attempted to assign to readonly property.");
});

test(function() {
    let a = [];
    for (let i = 0; i < 100; i++) {
        a.push(i);
    }
    a.length = 4277;
    let x = new Uint8ClampedArray;
    a.__proto__ = x;

    makeLengthWritable();
    let y = Array.prototype.slice.call(a, 100);
    print(y.length === 4277 - 100);
    print(y.length === __localLength);
    print(y instanceof Uint8ClampedArray);
    restoreOldDesc();
});

test(function() {
    let a = [];
    for (let i = 0; i < 100; i++) {
        a.push(i);
    }
    a.length = 4277;
    let calls = 0;
    let target = {};
    a.__proto__ = {
        constructor: {
            [Symbol.species]: function(length) {
                print(length === 4277)
                return new Proxy(target, {
                    defineProperty(...args) {
                        ++calls;
                        return Reflect.defineProperty(...args);
                    }
                });
            }
        }
    };
    let y = Array.prototype.map.call(a, x => x);
    print(calls === 100);
    for (let i = 0; i < 100; ++i)
        print(target[i] === i);
});

test(function() {
    let a = [];
    for (let i = 0; i < 100; i++) {
        a.push(i);
    }
    a.length = 4277;
    let calls = 0;
    let target = {};
    a.__proto__ = {
        constructor: {
            [Symbol.species]: function(length) {
                print(length === 0)
                return new Proxy(target, {
                    defineProperty(...args) {
                        ++calls;
                        return Reflect.defineProperty(...args);
                    }
                });
            }
        }
    };
    let y = Array.prototype.filter.call(a, x => true);
    print(calls === 100);
    for (let i = 0; i < 100; ++i)
        print(target[i] === i);
});

test(function() {
    let a = [];
    for (let i = 0; i < 100; i++) {
        a.push(i);
    }
    a.length = 4277;
    let calls = 0;
    let target = {};
    let keys = [];
    a.__proto__ = {
        constructor: {
            [Symbol.species]: function(length) {
                print(length === 4277)
                return new Proxy(target, {
                    defineProperty(...args) {
                        keys.push(args[1])
                        ++calls;
                        return Reflect.defineProperty(...args);
                    }
                });
            }
        }
    };
    let y = Array.prototype.slice.call(a, 0);
    print(calls === 101); 
    print(keys.length === 101);
    for (let i = 0; i < 100; ++i) {
        print(parseInt(keys[i]) === i);
        print(target[i] === i);
    }
    print(keys[keys.length - 1] === "length");
    print(target.length === 4277);
});
