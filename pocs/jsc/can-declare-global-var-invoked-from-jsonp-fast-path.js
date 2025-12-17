function print(x) {
    if (!x)
        throw new Error("Bad assertion!");
}

Object.preventExtensions(globalThis);

let didThrow = false;
try {
    $262.evalScript(`
        var foo = { "bar": 42 };
    `);
} catch (err) {
    didThrow = true;
    print(err.toString() === "TypeError: Can't declare global variable 'foo': global object must be extensible");
}

print(didThrow);
print(!globalThis.hasOwnProperty("foo"));
