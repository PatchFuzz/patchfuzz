(function() {
  function test1(a) {
    return { x: 1.5, x: a };
  };

  print({}, test1({}).x);
})();



(function() {
  function test1(a) {
    return { y: a };
  };

  function test2(a) {
    return { y: a };
  };

  print(1.5, test1(1.5).y);
  print({}, test2({}).y);
})();
