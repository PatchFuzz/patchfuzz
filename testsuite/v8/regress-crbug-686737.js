





Object.prototype.__defineGetter__(0, () => {
  throw Error();
});
var a = [, 0.1];
function foo(i) {
  a[i];
};
%PrepareFunctionForOptimization(foo);
foo(1);
foo(1);
%OptimizeFunctionOnNextCall(foo);
assertThrows(() => foo(0), Error);
