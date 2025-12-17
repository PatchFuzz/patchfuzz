function print(x) {
    if (!x)
        throw new Error("Bad assertion!");
}

Object.defineProperty(globalThis.__proto__, "foo", {
    set(val) {
        throw new Error("The setter shouldn't be invoked!");
    }
});

var barSetterCalls = 0;
var barSetterValue;
Object.defineProperty(globalThis, "bar", {
    set(val) {
        barSetterCalls++;
        barSetterValue = val;
    }
});

eval(`if (true) {
    function foo() {}
    function bar() {}
}`);

print(typeof foo === "function");
print(barSetterCalls === 1);
print(typeof barSetterValue === "function");
