function bar(error) {
  try {
    throw "didn't throw TypeError";
  } catch (err) {
    error instanceof error, "didn't throw " + error.prototype.name;
  }
}
function foo(param) {
  bar(TypeError);
}
try {
  bar();
} catch (e) {}
%PrepareFunctionForOptimization(foo);
try {
  foo();
} catch (e) {}
%OptimizeFunctionOnNextCall(foo);
foo();
