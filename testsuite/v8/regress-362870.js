







var obj = {};

for (var i = 0; i < 100; i++) {
  Object.defineProperty(obj, "x" + i, { value: 31415 });
  Object.defineProperty(obj, "y" + i, {
    get: function() { return 42; },
    set: function(value) { }
  });
  assertTrue(%HasFastProperties(obj));
}
