





function Module(stdlib) {
  "use asm";
  var fround = stdlib.Math.fround;
  function f(a, b) {
    a = +a;
    b = +b;
    return fround(a, b);
  }
  return { f: f };
}

var m = Module(this);
assertEquals(23, m.f(23));
assertEquals(42, m.f(42, 65));
assertFalse(%IsAsmWasmCode(Module));
