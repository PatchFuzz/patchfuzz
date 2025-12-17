function print(b) {
    if (!b)
        throw new Error("Bad assertion");
}

function test(f) { f(); }

function shallowEq(a, b) {
    if (a.length !== b.length)
        return false;
    for (let i = 0; i < a.length; ++i) {
        if (a[i] !== b[i])
            return false;
    }
    return true;
}

function makeArrayIterator(arr, f) {
    let i = 0;
    return {
        next() {
            f();
            if (i >= arr.length)
                return {done: true};
            return {value: arr[i++], done: false};
        }
    };
} 

test(function() {
    let arr = [10, 20];
    arr.__proto__ = {[Symbol.iterator]: Array.prototype[Symbol.iterator]};
    function bar(a) {
        a.x;
        return [...a];
    }
    noInline(bar);
    for (let i = 0; i < testLoopCount; i++) {
        print(shallowEq(bar(arr), arr));
    }
});

test(function() {
    let arr = [10, 20];
    let count = 0;
    function callback() {
        count++;
    }

    arr.__proto__ = {
        [Symbol.iterator]: function() {
            return makeArrayIterator(this, callback);
        }
    };

    function bar(a) {
        a.x;
        return [...a];
    }
    noInline(bar);
    for (let i = 0; i < testLoopCount; i++) {
        let t = bar(arr);
        print(count === 3);
        count = 0;
        print(shallowEq(t, arr));
    }
});

test(function() {
    let arr = [10, 20];
    let count = 0;
    function callback() {
        count++;
    }

    arr[Symbol.iterator] = function() {
        return makeArrayIterator(this, callback);
    };

    function bar(a) {
        a.x;
        return [...a];
    }
    noInline(bar);
    for (let i = 0; i < testLoopCount; i++) {
        let t = bar(arr);
        print(count === 3);
        count = 0;
        print(shallowEq(t, arr));
    }
});

test(function() {
    let arr = [10, 20];
    arr[Symbol.iterator] = Array.prototype[Symbol.iterator];
    function bar(a) {
        a.x;
        return [...a];
    }
    noInline(bar);
    for (let i = 0; i < testLoopCount; i++) {
        print(shallowEq(bar(arr), arr));
    }
});

test(function() {
    let arr = [, 20];
    let callCount = 0;
    Object.defineProperty(arr, 0, {get() { ++callCount; return 10; }});
    function bar(a) {
        a.x;
        return [...a];
    }
    noInline(bar);
    for (let i = 0; i < testLoopCount; i++) {
        let t = bar(arr);
        print(callCount === 1);
        print(shallowEq(t, arr));
        print(callCount === 2);
        callCount = 0;
    }
});


test(function() {
    let iter = [][Symbol.iterator]();
    let iterProto = Object.getPrototypeOf(iter);
    let oldNext = iterProto.next;

    function hackedNext() {
        let val = oldNext.call(this);
        if ("value" in val) {
            val.value++;
        }
        return val;
    }

    function test(a) {
        a.x;
        return [...a];
    }

    for (let i = 0; i < testLoopCount; ++i) {
        let arr = [1,,3];
        let callCount = 0;
        Object.defineProperty(arr, 1, { get: function() { ++callCount; iterProto.next = hackedNext; return 2; } });
        let t = test(arr);
        print(callCount === 1);
        print(t.length === 3);
        print(t[0] === 1);
        print(t[1] === 2);
        print(t[2] === 3);
        iterProto.next = oldNext;
    }
});
