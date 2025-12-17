function test() {
  var g = newGlobal();
  var arr = g.evaluate(`[1, 2, 3]`);
  var count = 0;
  Object.defineProperty(g.Array.prototype, "constructor", {get: function() {
    count++;
    return Array;
  }});
  for (var i = 0; i < 20; i++) {
    print(Array.prototype.slice.call(arr).length, 3);
  }
  print(count, 20);
  print(getFuseState().OptimizeArraySpeciesFuse.intact, true);
  print(g.getFuseState().OptimizeArraySpeciesFuse.intact, false);
}
test();
