const o = {};
o.d = 512;
const p = { p:42 };

function f() {
  const copy = { __proto__: p, ...o };
  const dummy = { ...copy };
  %HeapObjectVerify(dummy);
  copy.x = 55;
}
f();
o.d = undefined;
f();
