



function C() {};

const p = new Proxy({}, { getPrototypeOf() { return C.prototype } });

assertTrue(C[Symbol.hasInstance](p));
assertTrue(C[Symbol.hasInstance](p));
