;

var p = new Proxy({}, {
    getOwnPropertyDescriptor() { return {configurable: true}; }
});
var desc = Object.getOwnPropertyDescriptor(p, "x");
print(desc, {
    value: undefined,
    writable: false,
    enumerable: false,
    configurable: true
});
