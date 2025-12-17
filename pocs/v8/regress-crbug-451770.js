print(function f() {
  var t = { toString: function() { throw new Error(); } };
  var o = { [t]: 23 };
}, Error);

print(function f() {
  var t = { toString: function() { throw new Error(); } };
  class C { [t]() { return 23; } };
}, Error);
