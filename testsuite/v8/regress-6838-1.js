





(function TestMathMaxOnLargeInt() {
  function Module(stdlib) {
    "use asm";
    var max = stdlib.Math.max;
    function f() {
      return max(42,0xffffffff);
    }
    return f;
  }
  var f = Module(this);
  assertEquals(0xffffffff, f());
  assertFalse(%IsAsmWasmCode(Module));
})();

(function TestMathMinOnLargeInt() {
  function Module(stdlib) {
    "use asm";
    var min = stdlib.Math.min;
    function f() {
      return min(42,0xffffffff);
    }
    return f;
  }
  var f = Module(this);
  assertEquals(42, f());
  assertFalse(%IsAsmWasmCode(Module));
})();
