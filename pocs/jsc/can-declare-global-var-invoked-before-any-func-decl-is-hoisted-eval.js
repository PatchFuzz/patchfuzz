function print(x) {
    if (!x)
        throw new Error("Bad assertion!");
}

globalThis.foo = 1;
Object.preventExtensions(globalThis);

let didThrow = false;
try {
    eval(`
        if (true) {
            function foo() {}
        }

        var bar;
    `);
} catch (err) {
    didThrow = true;
    print(err.toString() === "TypeError: Can't declare global variable 'bar': global object must be extensible");
}

print(didThrow);
print(foo === 1);
