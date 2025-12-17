function runNearStackLimit(f) {
  function t() {
    try {
      t();
    } catch (e) {
      f(true);
    }
  }
  t();
}

var a = {x: 10};
var b = {y: 10};
function inner(should_deopt) {
  if (should_deopt == true) {
    a.x;
  }
  return b.y;
}

%PrepareFunctionForOptimization(f);
%PrepareFunctionForOptimization(inner);
f(false);
f(false);
%OptimizeFunctionOnNextCall(f);
f(false);

function f(x) {
  
  inner(x,
      0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
      0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
      0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
      0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
      0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
      0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
      );
}

runNearStackLimit(f);
