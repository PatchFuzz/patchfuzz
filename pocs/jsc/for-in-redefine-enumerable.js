function print(x) {
    if (!x)
        throw new Error("Bad assertion!");
}

function shouldBe(actual, expected) {
    if (actual !== expected)
        throw new Error(`Bad value: ${actual} expected ${expected}.`);
}

const enumDesc = { value: 0, writable: true, enumerable: true, configurable: true };
const dontEnumDesc = { value: 0, writable: true, enumerable: false, configurable: true };


(() => {
    function test() {
        var arr = Object.defineProperties([0, 0, 0], { 1: dontEnumDesc });
        var count = 0;
        for (var i in arr) {
            count++;
            print(i in arr);
            shouldBe(arr[i], 0);
            ++arr[i];
            if (i === "0")
                Object.defineProperties(arr, { 1: enumDesc, 2: dontEnumDesc });
        }
        shouldBe(count, 1);
        shouldBe(arr[0], 1);
        shouldBe(arr[1], 0);
        shouldBe(arr[2], 0);
    }

    for (var i = 0; i < testLoopCount; ++i)
        test();
})();


(() => {
    function test() {
        var obj = Object.create(null, { a: enumDesc, b: enumDesc, c: dontEnumDesc });
        for (var key in obj) {
            print(key in obj);
            shouldBe(obj[key], 0);
            ++obj[key];
            if (key === "a")
                Object.defineProperties(obj, { b: dontEnumDesc, c: enumDesc });
        }
        shouldBe(obj.a, 1);
        shouldBe(obj.b, 0);
        shouldBe(obj.c, 0);
    }

    for (var i = 0; i < testLoopCount; ++i)
        test();
})();


(() => {
    function test() {
        var target = { a: 0, b: 0, c: 0 };
        var enumMap = { a: true, b: true, c: false };
        var proxy = new Proxy(target, {
            getOwnPropertyDescriptor: (_, key) => {
                return { value: target[key], writable: true, enumerable: enumMap[key], configurable: true };
            },
        });

        for (var key in proxy) {
            print(key in proxy);
            shouldBe(proxy[key], 0);
            ++target[key];
            if (key === "a") {
                enumMap.b = false;
                enumMap.c = true;
            }
        }
        shouldBe(target.a, 1);
        shouldBe(target.b, 0);
        shouldBe(target.c, 1);
    }

    for (var i = 0; i < testLoopCount; ++i)
        test();
})();


(() => {
    function test() {
        var seen = {};
        var proto = Object.create(null, { b: enumDesc, c: dontEnumDesc, d: enumDesc, e: enumDesc });
        var heir = Object.create(proto, { a: enumDesc, e: dontEnumDesc });
        for (var key in heir) {
            print(key in heir);
            shouldBe(heir[key], 0);
            seen[key] = true;
            if (key === "a")
                Object.defineProperties(proto, { b: dontEnumDesc, c: enumDesc });
            if (key === "d")
                Object.defineProperties(heir, { e: enumDesc });
        }
        print(seen.a);
        print(!seen.b);
        print(!seen.c);
        print(seen.d);
        print(seen.e);
    }

    for (var i = 0; i < testLoopCount; ++i)
        test();
})();
