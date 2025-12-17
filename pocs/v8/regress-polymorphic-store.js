var o1 = {};
o1.f1 = function() {
  return 10;
};
o1.x = 5;
o1.y = 2;
var o2 = {};
o2.x = 5;
o2.y = 5;

function store(o, v) {
  o.y = v;
};
%PrepareFunctionForOptimization(store);
store(o2, 0);
store(o1, 0);
store(o2, 0);
%OptimizeFunctionOnNextCall(store);
store(o1, 10);
print(5, o1.x);
print(10, o1.y);
