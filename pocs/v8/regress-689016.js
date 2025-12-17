(function() {
  function f() {}

  print(function() {
    f(...Array(1000000));
  }, RangeError);

})();
