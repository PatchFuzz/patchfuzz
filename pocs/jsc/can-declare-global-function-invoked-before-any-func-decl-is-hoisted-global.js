function print(x) {
    if (!x)
        throw new Error("Bad assertion!");
}

let barSetCalls = 0;
Object.defineProperty(globalThis, "bar", { writable: false, enumerable: true, configurable: false });

let didThrow = false;
try {
    $262.evalScript(`
        if (true) {
            function foo() {}
        }

        function bar() {}
    `);
} catch (err) {
    didThrow = true;
    print(err.toString() === "TypeError: Can't declare global function 'bar': property must be either configurable or both writable and enumerable");
}

print(didThrow);
print(barSetCalls === 0);
print(!globalThis.hasOwnProperty("foo"));
