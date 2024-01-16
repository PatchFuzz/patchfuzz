





function asm() {
  "use asm";
  function f(a) {
    a = a | 0;
    tab[a & 0]() | 0;
  }
  function unused() {
    return 0;
  }
  var tab = [ unused ];
  return f;
}

asm();
gc();
asm();
