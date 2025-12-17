(function() {
function foo() {
  var a = new Array(2);
  a[1] = 1.5;
  return a;
};
%PrepareFunctionForOptimization(foo);
print(undefined, foo()[0]);
print(undefined, foo()[0]);
%OptimizeFunctionOnNextCall(foo);
print(undefined, foo()[0]);
})();

(function() {
function foo() {
  var a = Array(2);
  a[1] = 1.5;
  return a;
};
%PrepareFunctionForOptimization(foo);
print(undefined, foo()[0]);
print(undefined, foo()[0]);
%OptimizeFunctionOnNextCall(foo);
print(undefined, foo()[0]);
})();
