function c(p) {
  return {__proto__: p};
}
var p = {};
var o = c(p);
p.x = 0.6;
Object.defineProperty(p, "x", { writable: false });
