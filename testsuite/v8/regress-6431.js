





(function TestImportSymbolValue() {
  function Module(stdlib, foreign) {
    "use asm";
    var x = +foreign.x;
    function f() {}
    return { f:f };
  }
  var foreign = { x : Symbol("boom") };
  assertThrows(() => Module(this, foreign));
  assertFalse(%IsAsmWasmCode(Module));
})();

(function TestImportMutatingObject() {
  function Module(stdlib, foreign) {
    "use asm";
    var x = +foreign.x;
    var PI = stdlib.Math.PI;
    function f() { return +(PI + x) }
    return { f:f };
  }
  var stdlib = { Math : { PI : Math.PI } };
  var foreign = { x : { valueOf : () => (stdlib.Math.PI = 23, 42) } };
  var m = Module(stdlib, foreign);
  assertFalse(%IsAsmWasmCode(Module));
  assertEquals(65, m.f());
})();
