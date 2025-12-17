Object.defineProperty(Int32Array.prototype, 'length', { set(v) { } });

(function testSlice() {
  var a = new Array();
  a.constructor = Int32Array;
  a.length = 1000; 
  print(a.slice() instanceof Int32Array);
})();

(function testSplice() {
  var a = new Array();
  a.constructor = Int32Array;
  a.length = 1000; 
  print(a.splice(1) instanceof Int32Array);
})();
