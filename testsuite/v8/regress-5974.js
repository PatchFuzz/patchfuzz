



(function() {
  var a = Array(...Array(5)).map(() => 1);

  assertEquals([1, 1, 1, 1, 1], a);
})();
