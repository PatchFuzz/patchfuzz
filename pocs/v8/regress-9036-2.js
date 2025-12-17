function C() {};

const p = new Proxy({}, { getPrototypeOf() { return C.prototype } });

print(C[Symbol.hasInstance](p));
print(C[Symbol.hasInstance](p));
