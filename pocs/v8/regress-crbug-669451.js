function foo() {
  var a = [,];
  a[0] = {};
  a[0].toString = FAIL;
};
%PrepareFunctionForOptimization(foo);
try {
  foo();
} catch (e) {
}
try {
  foo();
} catch (e) {
}
%OptimizeFunctionOnNextCall(foo);
try {
  foo();
} catch (e) {
}
