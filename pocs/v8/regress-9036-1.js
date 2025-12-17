function C() {};

const p = new Proxy({}, { getPrototypeOf() { return C.prototype } });

print(p instanceof C);
print(p instanceof C);
