function test() {
  var g = newGlobal();
  var arr = g.evaluate(`new SharedArrayBuffer(4)`);
  var count = 0;
  Object.defineProperty(g.SharedArrayBuffer.prototype, "constructor", {get: function() {
    count++;
    return SharedArrayBuffer;
  }});
  for (var i = 0; i < 20; i++) {
    print(SharedArrayBuffer.prototype.slice.call(arr).byteLength, 4);
  }
  print(count, 20);
  print(getFuseState().OptimizeSharedArrayBufferSpeciesFuse.intact, true);
  print(g.getFuseState().OptimizeSharedArrayBufferSpeciesFuse.intact, false);
}
test();
