



function C() {};

const p = new Proxy({}, { getPrototypeOf() { return C.prototype } });
const o = Object.create(p);

assertTrue(o instanceof C);
assertTrue(o instanceof C);
