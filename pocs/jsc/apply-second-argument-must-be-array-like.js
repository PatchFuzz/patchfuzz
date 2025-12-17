function print(x) {
    if (!x)
        throw Error("Bad");
}

function shouldThrow(expr) {
    let testFunc = new Function(expr);
    for (let i = 0; i < testLoopCount; i++) {
        let error;
        try {
            testFunc();
        } catch (e) {
            error = e;
        }
        print(error);
    }
}

function foo() { }

shouldThrow("foo.apply(undefined, true)");
shouldThrow("foo.apply(undefined, false)");
shouldThrow("foo.apply(undefined, 100)");
shouldThrow("foo.apply(undefined, 123456789.12345)");
shouldThrow("foo.apply(undefined, 1.0/1.0)");
shouldThrow("foo.apply(undefined, 1.0/0)");
shouldThrow("foo.apply(undefined, 'hello')");
shouldThrow("foo.apply(undefined, Symbol())");

function bar() {
    return arguments.length;
}

for (let i = 0; i < testLoopCount; i++) {
    new Function(`
        print(bar.apply(undefined, undefined) === 0);
        print(bar.apply(undefined, null) === 0);
        print(bar.apply(undefined, {}) === 0);
        print(bar.apply(undefined, []) === 0);
        print(bar.apply(undefined, function() {}) === 0);
    `)();
}
