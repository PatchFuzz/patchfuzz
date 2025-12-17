function baz(obj, store) {
  if (store === true) obj[0] = 1;
}
function bar(store) {
  baz(Array.prototype, store);
};
%PrepareFunctionForOptimization(bar);
bar(false);
bar(false);
%OptimizeFunctionOnNextCall(bar);
bar(true);

function foo() {
  [].push();
};
%PrepareFunctionForOptimization(foo);
foo();
foo();
%OptimizeFunctionOnNextCall(foo);
foo();
