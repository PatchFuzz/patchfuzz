





Array.prototype.__proto__ = null;
var func = Array.prototype.push;
var prototype = Array.prototype;
function CallFunc(a) {
  func.call(a);
}
function CallFuncWithPrototype() {
  CallFunc(prototype);
};
%PrepareFunctionForOptimization(CallFuncWithPrototype);
CallFunc([]);
CallFunc([]);
%OptimizeFunctionOnNextCall(CallFuncWithPrototype);
CallFuncWithPrototype();
