function g() {
  throw 1;
}

var v = {valueOf: g};

function foo(v) {
  v++;
};
%PrepareFunctionForOptimization(foo);
%NeverOptimizeFunction(g);
print(function() {
  foo(v);
});
print(function() {
  foo(v);
});
%OptimizeFunctionOnNextCall(foo);
print(function() {
  foo(v);
});
