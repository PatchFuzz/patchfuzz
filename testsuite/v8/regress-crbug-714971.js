





function Module(stdlib, foreign, heap) {
  "use asm";
  var a = new stdlib.Int16Array(heap);
  function f() {
    return a[23 >> -1];
  }
  return { f:f };
}
var b = new ArrayBuffer(1024);
var m = Module(this, {}, b);
new Int16Array(b)[0] = 42;
assertEquals(42, m.f());
assertFalse(%IsAsmWasmCode(Module));
