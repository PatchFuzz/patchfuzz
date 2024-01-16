




























(function() {
  function test1(a) {
    return { x: 1.5, x: a };
  };

  assertEquals({}, test1({}).x);
})();



(function() {
  function test1(a) {
    return { y: a };
  };

  function test2(a) {
    return { y: a };
  };

  assertEquals(1.5, test1(1.5).y);
  assertEquals({}, test2({}).y);
})();
