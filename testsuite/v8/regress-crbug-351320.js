





var result = 0;
var o1 = {};
o2 = {
  y: 1.5
};
o2.y = 0;
o3 = o2.y;

function crash() {
  for (var i = 0; i < 10; i++) {
    result += o1.x + o3.foo;
  }
};
%PrepareFunctionForOptimization(crash);
crash();
%OptimizeFunctionOnNextCall(crash);
crash();
