





function foo(...v) {
  function bar() {
    return arguments.length;
  }
  Array.prototype.splice.apply(v, v);
  Array.prototype.splice.apply(v, v);
  return bar(...v);
}
%PrepareFunctionForOptimization(foo);
print(3, foo(1, 2, 3, 4));
%OptimizeFunctionOnNextCall(foo);
print(3, foo(1, 2, 3, 4));
print(3, foo(1, 2, 3, 4));
