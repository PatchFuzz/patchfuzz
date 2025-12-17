var r = /r/;
function f() {
  r[r] = function() {};
}

function g() {
  for (var i = 0; i < 300; i++) {
    f();
    if (i == 150) %OptimizeOsr();
  }
}
%PrepareFunctionForOptimization(g);
