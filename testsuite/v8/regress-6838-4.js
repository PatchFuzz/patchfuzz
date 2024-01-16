





(function TestMinusZeroIsDouble() {
  function Module(stdlib) {
    'use asm';
    function f() {
      var x = 0.;
      x = 1. / +-0;
      return +x;
    }
    return f;
  }
  var f = Module(this);
  assertEquals(-Infinity, f());
  assertTrue(%IsAsmWasmCode(Module));
})();

(function TestMinusZeroIsDoubleBracketed() {
  function Module(stdlib) {
    'use asm';
    function f() {
      var x = 0.;
      x = 1. / (-0);
      return +x;
    }
    return f;
  }
  var f = Module(this);
  assertEquals(-Infinity, f());
  assertTrue(%IsAsmWasmCode(Module));
})();

(function TestMinusZeroIsDoubleMultDouble1() {
  function Module(stdlib) {
    'use asm';
    function f() {
      var x = 0.;
      x = 1. / (-0 * 1.0);
      return +x;
    }
    return f;
  }
  var f = Module(this);
  assertEquals(-Infinity, f());
  assertTrue(%IsAsmWasmCode(Module));
})();

(function TestMinusZeroIsDoubleMultDouble2() {
  function Module(stdlib) {
    'use asm';
    function f() {
      var x = 0.;
      x = 1. / (1.0 * -0);
      return +x;
    }
    return f;
  }
  var f = Module(this);
  assertEquals(-Infinity, f());
  assertTrue(%IsAsmWasmCode(Module));
})();

(function TestMinusZeroIsDoubleMultInt() {
  function Module(stdlib) {
    'use asm';
    function f() {
      var x = 0.;
      x = 1. / (-0 * 1);
      return +x;
    }
    return f;
  }
  var f = Module(this);
  assertFalse(%IsAsmWasmCode(Module));
})();
