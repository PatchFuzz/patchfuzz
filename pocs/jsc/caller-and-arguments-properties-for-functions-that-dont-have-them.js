function print(b) {
    if (!b)
        throw new Error;
}

const GeneratorFunction = (function* () {}).constructor;

function test1(f) {
    f.__proto__ = {};
    print(!f.hasOwnProperty("caller"));
    Object.defineProperty(f, "caller", {value:42});
    print(f.caller === 42);
    print(!f.hasOwnProperty("arguments"));
    Object.defineProperty(f, "arguments", {value:32});
    print(f.arguments === 32);
}
for (let i = 0; i < 1000; ++i) {
    test1(function () {}.bind());
    test1(function () { "use strict"; });
    test1(new Function(`"use strict";`));
    test1(new GeneratorFunction);
    test1(class C { });
    test1(() => undefined);
    test1(async function foo(){});
    test1(function* foo() { });
}

function test2(f, p = {}) {
    f.__proto__ = p;
    print(!f.hasOwnProperty("caller"));
    f.caller = 42;
    print(f.caller === 42);
    print(!f.hasOwnProperty("arguments"));
    f.arguments = 44;
    print(f.arguments === 44);
}

{
    let proxy = new Proxy({}, {
        has(...args) {
            throw new Error("Should not be called!");
        }
    });
    for (let i = 0; i < 1000; ++i) {
        test2(function () {}.bind(), proxy);
        test2(function () { "use strict"; }, proxy);
        test2(new Function(`"use strict";`), proxy);
        test2(new GeneratorFunction, proxy);
        test2(class C { }, proxy);
        test2(() => undefined, proxy);
        test2(async function foo(){}, proxy);
        test2(function* foo() { }, proxy);
    }
}

for (let i = 0; i < 1000; ++i) {
    test2(function() {}.bind());
    test2(function () { "use strict"; });
    test2(new Function(`"use strict";`));
    test2(new GeneratorFunction);
    test2(class C { });
    test2(() => undefined);
    test2(async function foo(){});
    test2(function* foo() { });
}

function test3(f) {
    f.__proto__ = {};

    print(!f.hasOwnProperty("caller"));
    f.caller = 42;
    print(f.caller === 42);
    print(f.hasOwnProperty("caller"));
    print(delete f.caller === true);
    print(f.caller === undefined);
    print(!f.hasOwnProperty("caller"));

    print(!f.hasOwnProperty("arguments"));
    f.arguments = 44;
    print(f.arguments === 44);
    print(f.hasOwnProperty("arguments"));
    print(delete f.arguments === true);
    print(f.arguments === undefined);
    print(!f.hasOwnProperty("arguments"));
}
for (let i = 0; i < 1000; ++i) {
    test3(function () {}.bind());
    test3(function () { "use strict"; });
    test3(new Function(`"use strict";`));
    test3(new GeneratorFunction);
    test3(class C { });
    test3(() => undefined);
    test3(async function foo(){});
    test3(function* foo() { });
}

for (let i = 0; i < 1000; ++i) {
    class C1 { static caller() {} }
    C1.caller = 1;
    print(C1.caller === 1);

    class C2 { static arguments() {} }
    C2.arguments = 2;
    print(C2.arguments === 2);
}

test1(String.prototype.italics);
test2(Reflect.deleteProperty);
test3(Math.log1p);
