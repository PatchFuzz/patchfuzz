var t = 0;
function foo() {
  var o = {x: 1};
  var p = {y: 2.5, x: 0};
  o = [];
  for (var i = 0; i < 2; ++i) {
    t = o.x;
    o = p;
  }
};
%PrepareFunctionForOptimization(foo);
foo();
foo();
%OptimizeFunctionOnNextCall(foo);
foo();
