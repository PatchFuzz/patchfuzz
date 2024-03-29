


(function() {
  function f(a, b, a) {
    return Array.prototype.slice.call(arguments);
  }
  let result = f(456, 789, 111112);
  assertEquals(result[0], 456);
  assertEquals(result[1], 789);
  assertEquals(result[2], 111112);
  assertEquals(result.length, 3);
})();

(function() {
  function f(a, b, a) {
    return Array.prototype.slice.call(arguments);
  }
  let result = f(456, 789, 111112, 543, 654);
  assertEquals(result[0], 456);
  assertEquals(result[1], 789);
  assertEquals(result[2], 111112);
  assertEquals(result[3], 543);
  assertEquals(result[4], 654);
  assertEquals(result.length, 5);
})();
