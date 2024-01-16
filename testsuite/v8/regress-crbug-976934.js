





function Module(stdlib, imports, heap) {
  "use asm";

  var fround = stdlib.Math.fround;

  function f() {
    var x = fround(-1.7976931348623157e+308);
    return fround(x);
  }

  return { f: f };
}

var m = Module(this);
assertEquals(-Infinity, m.f());
assertTrue(%IsAsmWasmCode(Module));
