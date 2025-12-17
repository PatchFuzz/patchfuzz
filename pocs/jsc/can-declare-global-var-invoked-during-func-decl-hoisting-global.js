function print(x) {
    if (!x)
        throw new Error("Bad assertion!");
}

let fooSetterValue;
Object.defineProperty(globalThis, "foo", { get() {}, set(val) { fooSetterValue = val; }, enumerable: false, configurable: false });
Object.preventExtensions(globalThis);

$262.evalScript(`{
    function foo() {}
    function bar() {}
}`);

print(typeof fooSetterValue === "function");
print(typeof bar === "undefined");
print(!globalThis.hasOwnProperty("bar"));
