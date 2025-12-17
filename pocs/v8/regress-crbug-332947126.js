const p = {};
function f8(x) {
  return {
    "a": x,
    ...{},
    get g() {},
    __proto__: p,
  };
}
f8(-1024);
f8(1094813926);
