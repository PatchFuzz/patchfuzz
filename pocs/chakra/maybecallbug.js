var module = (function(stdlib, foreign, heap) {
  "use asm";
  var bar = foreign.bar;
  var Float32ArrayView = new stdlib.Float32Array(heap);
  function foo() {
    return +bar(Float32ArrayView[0])
  }
  return foo;
})(this, {bar: function(){}}, new ArrayBuffer(1 << 20));

module();
