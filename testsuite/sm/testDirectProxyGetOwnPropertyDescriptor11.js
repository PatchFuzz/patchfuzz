

load(libdir + "asserts.js");

var p = new Proxy({}, {
    getOwnPropertyDescriptor() { return {configurable: true}; }
});
var desc = Object.getOwnPropertyDescriptor(p, "x");
assertDeepEq(desc, {
    value: undefined,
    writable: false,
    enumerable: false,
    configurable: true
});
