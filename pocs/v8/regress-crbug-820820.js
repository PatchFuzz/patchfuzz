function* generator() {
  yield undefined;
}
function bar(x) {
  const objects = [];
  for (let obj of generator()) {
  }
  return objects[0];
}
function foo() {
  try { undefined[0] = bar(); } catch (e) { }
  Math.min(bar(), bar(), bar());
}
%PrepareFunctionForOptimization(foo);
foo();
foo();
%OptimizeFunctionOnNextCall(foo);
foo();
