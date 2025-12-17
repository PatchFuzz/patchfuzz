(function() {
  function f(a, b, a) {
    return Array.prototype.slice.call(arguments);
  }
  let result = f(456, 789, 111112);
  print(result[0], 456);
  print(result[1], 789);
  print(result[2], 111112);
  print(result.length, 3);
})();

(function() {
  function f(a, b, a) {
    return Array.prototype.slice.call(arguments);
  }
  let result = f(456, 789, 111112, 543, 654);
  print(result[0], 456);
  print(result[1], 789);
  print(result[2], 111112);
  print(result[3], 543);
  print(result[4], 654);
  print(result.length, 5);
})();
