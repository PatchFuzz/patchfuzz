oomTest(function() {
  var o = {};
  for (var p in this) {
    o[p] = 1;
  }
});
