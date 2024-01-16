





function g() {
  throw 1;
}

var v = {valueOf: g};

function foo(v) {
  v++;
};
%PrepareFunctionForOptimization(foo);
%NeverOptimizeFunction(g);
assertThrows(function() {
  foo(v);
});
assertThrows(function() {
  foo(v);
});
%OptimizeFunctionOnNextCall(foo);
assertThrows(function() {
  foo(v);
});
