(function() {
  var a = Array(...Array(5)).map(() => 1);

  print([1, 1, 1, 1, 1], a);
})();
