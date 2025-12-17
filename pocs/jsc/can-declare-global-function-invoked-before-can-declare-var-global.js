function print(x) {
    if (!x)
        throw new Error("Bad assertion!");
}

Object.defineProperty(globalThis, "foo", { get() {}, enumerable: true, configurable: false });
Object.preventExtensions(globalThis);

let didThrow = false;
try {
    $262.evalScript(`
        var bar = 1;
        function foo() {}
    `);
} catch (err) {
    didThrow = true;
    print(err.toString() === "TypeError: Can't declare global function 'foo': property must be either configurable or both writable and enumerable");
}

print(didThrow);
print(!globalThis.hasOwnProperty("bar"));
