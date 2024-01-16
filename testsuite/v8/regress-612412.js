





function counter() { return {x: 0} || this }

var f = (function() {
  "use asm";
  return function g(c1, c2) {
    for (var x = 0 ; x < 10; ++x) {
      if (x == 5) %OptimizeOsr();
      c1();
    }
  }
})();
%PrepareFunctionForOptimization(f);

g = (function() { f((Array), counter()); });
g();
