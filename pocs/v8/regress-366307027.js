function module() {
  'use asm';
  function f(x) {
    x = x | 0;
    return 2.3;
  }
  return {f: f};
}
module();
