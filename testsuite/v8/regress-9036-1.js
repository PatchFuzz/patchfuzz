



function C() {};

const p = new Proxy({}, { getPrototypeOf() { return C.prototype } });

assertTrue(p instanceof C);
assertTrue(p instanceof C);
