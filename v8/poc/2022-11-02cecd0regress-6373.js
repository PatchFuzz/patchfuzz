





(function() {
var A = {};

A[Symbol.hasInstance] = function(x) {
  return 1;
};

var a = {};

function foo(o) {
  return o instanceof A;
};
%PrepareFunctionForOptimization(foo);
foo(a);
foo(a);
print(foo(a), true);
%OptimizeMaglevOnNextCall(foo);
print(foo(a), true);
})();

(function() {
var A = {};

A[Symbol.hasInstance] = function(x) {
  %DeoptimizeFunction(foo);
  return 1;
};

var a = {};

function foo(o) {
  return o instanceof A;
};
%PrepareFunctionForOptimization(foo);
foo(a);
foo(a);
print(foo(a), true);
%OptimizeMaglevOnNextCall(foo);
print(foo(a), true);
})();
