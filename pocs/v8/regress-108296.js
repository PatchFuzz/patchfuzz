function f(k, a, b) {
  
  
  
  var x = k ? a.foo : a.foo;
  return x.prototype;
};
%PrepareFunctionForOptimization(f);
var a = {};


a.foo = function() {
  return function() {};
}();


f(true, a, a);
f(true, a, a);
f(false, a, a);
f(false, a, a);
%OptimizeFunctionOnNextCall(f);
f(true, a, a);
