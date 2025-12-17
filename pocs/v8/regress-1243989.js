function f(x) {
  new x.Uint16Array();
  function h(y) { /[\cA]/; }
}
let i = 0;
function g() {
  try { g(); } catch (e) {}
  if (i++ > 200) return;  
  f();
}
f(this);
g();
