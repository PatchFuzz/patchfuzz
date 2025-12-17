function print(x) {
    if (!x)
        throw new Error("Bad assertion!");
}

let fooSetCalls = 0;
Object.defineProperty(globalThis, "foo", { get() {}, set() { fooSetCalls++; }, enumerable: true, configurable: false });

let didThrow = false;
try {
    eval(`
        if (true) {
            function bar() {}
        }

        function foo() {}
    `);
} catch (err) {
    didThrow = true;
    print(err.toString() === "TypeError: Can't declare global function 'foo': property must be either configurable or both writable and enumerable");
}

print(didThrow);
print(fooSetCalls === 0);
print(!globalThis.hasOwnProperty("bar"));
