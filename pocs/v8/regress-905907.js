var g = function f(a = 3) {
  var context_allocated = undefined;
  function inner() { f(); f(context_allocated) };
  inner();
};
print("g()", RangeError);
