




var x = -1n;
function a() {
  'use asm';
  function f() {
    return (((((-1) >>> (0 + 0)) | 0) % 10000) >> (0 + 0)) | 0;
  }
  return f;
}
assertEq(true, a()() == x);