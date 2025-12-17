function C() {};

const p = new Proxy({}, { getPrototypeOf() { return C.prototype } });
const o = Object.create(p);

print(o instanceof C);
print(o instanceof C);
