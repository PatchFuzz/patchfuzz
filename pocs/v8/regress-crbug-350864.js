var v0 = new WeakMap;
var v1 = {};
v0.set(v1, 1);
var sym = Symbol();
v1[sym] = 1;
var symbols = Object.getOwnPropertySymbols(v1);
print([sym], symbols);
