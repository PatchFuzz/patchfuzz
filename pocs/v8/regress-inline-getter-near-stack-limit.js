function runNearStackLimit(f) {
  function t() {
    try {
      t();
    } catch (e) {
      f();
    }
  };
  try {
    t();
  } catch (e) {
  }
}

function g(x) {
  return x.bar;
};
%PrepareFunctionForOptimization(g);
function f1() {}
function f2() {}

var x = Object.defineProperty({}, "bar", { get: f1 });
g(x);
g(x);
var y = Object.defineProperty({}, "bar", { get: f2 });
g(y);
%OptimizeFunctionOnNextCall(g);
runNearStackLimit(function() {
  g(y);
});
