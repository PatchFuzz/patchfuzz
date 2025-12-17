function test() {
  var g = newGlobal();
  var arr = g.evaluate(`new ArrayBuffer(4)`);
  var count = 0;
  Object.defineProperty(g.ArrayBuffer.prototype, "constructor", {get: function() {
    count++;
    return ArrayBuffer;
  }});
  for (var i = 0; i < 20; i++) {
    print(ArrayBuffer.prototype.slice.call(arr).byteLength, 4);
  }
  print(count, 20);
  print(getFuseState().OptimizeArrayBufferSpeciesFuse.intact, true);
  print(g.getFuseState().OptimizeArrayBufferSpeciesFuse.intact, false);
}
test();
