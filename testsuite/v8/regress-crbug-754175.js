





function Module(stdlib, foreign, buffer) {
  "use asm";
  var heap = new stdlib.Int8Array(buffer);
  function foo() { return heap[23] | 0 }
  return { foo:foo };
}
const kLength = Math.max(0x100000000, %TypedArrayMaxLength() + 1);
function instantiate() {
  
  var buffer = new ArrayBuffer(kLength);
  
  var module = Module(this, {}, buffer);
}
assertThrows(instantiate, RangeError);
