function print(x) {
    if (!x)
        throw new Error("Bad assertion!");
}

let barSetterValue;
Object.defineProperty(globalThis, "bar", { get() {}, set(val) { barSetterValue = val; }, enumerable: true, configurable: false });
Object.preventExtensions(globalThis);

eval(`{
    function foo() {}
    function bar() {}
}`);

print(typeof foo === "undefined");
print(typeof barSetterValue === "function");
print(!globalThis.hasOwnProperty("foo"));
