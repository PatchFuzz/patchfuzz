function callFun(fun) {
    fun();
}
var iterable = {};
iterable[Symbol.iterator] = () => ({
  next: () => ({}),
  return: () => {
  }
});
function* iterateAndThrow() {
  for (let x of iterable) {
    throw 42;
  }
}
%PrepareFunctionForOptimization(iterateAndThrow);

try {
  callFun(() => iterateAndThrow().next());
} catch (e) {}

iterateAndThrow();
%OptimizeMaglevOnNextCall(iterateAndThrow);

try {
  iterateAndThrow().next();
} catch {
}
