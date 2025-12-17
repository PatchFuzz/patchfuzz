function foo(f) {
  f.caller;
}
function bar(f) {
  new foo(f);
};
%PrepareFunctionForOptimization(bar);
bar(function() {});
%OptimizeFunctionOnNextCall(bar);
bar(function() {});
