;
function f([a]) { return a; }
var i = 0;
var o = {[Symbol.iterator]: function () { i++; return {
  next: function () { i++; return {value: 42, done: false}; }}}};
print(f(o), 42);
print(i, 2);
