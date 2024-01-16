



(function() {
  function f() {}

  assertThrows(function() {
    f(...Array(1000000));
  }, RangeError);

})();
