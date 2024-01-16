





function asm() {
  'use asm';
  return {};
}
function f() {
  asm();
  f();
}
assertThrows(() => f(), RangeError);
