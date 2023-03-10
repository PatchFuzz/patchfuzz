





function Module(stdlib) {
  "use asm";
  var fround = stdlib.Math.fround;
  
  const infinity = fround(1.7976931348623157e+308);
  function f() {
    return infinity;
  }
  return { f: f };
}

var m = Module(this);
print(Infinity, m.f());
print(%IsAsmWasmCode(Module));
