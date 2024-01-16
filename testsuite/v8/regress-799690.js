





function asm() {
  "use asm";
  function f(a) {
    a = a | 0;
    while (1) return 1;
    return 0;
  }
  return { f: f};
}
const mod = asm();
function call_f() {
  mod.f();
  call_f();
}
assertThrows(call_f, RangeError);
