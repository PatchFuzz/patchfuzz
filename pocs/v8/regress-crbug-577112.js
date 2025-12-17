Array.prototype.__proto__ = null;
var prototype = Array.prototype;
function f() {
  prototype.lastIndexOf({});
};
%PrepareFunctionForOptimization(f);
f();
f();
%OptimizeFunctionOnNextCall(f);
f();
