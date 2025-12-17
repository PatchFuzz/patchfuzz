var boom = (function(stdlib, foreign, heap) {
  "use asm";
  var MEM8 = new stdlib.Uint8Array(heap);
  var MEM32 = new stdlib.Int32Array(heap);
  function foo(i, j) {
    j = MEM8[256];
    
    MEM32[j >> 10] = 0xabcdefaa;
    return MEM32[j >> 2] + j
  }
  return foo
})(this, 0, new ArrayBuffer(256));
%PrepareFunctionForOptimization(boom);
%OptimizeFunctionOnNextCall(boom);
boom(0, 0x1000);
