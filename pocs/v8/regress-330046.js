var o1 = {a : 10};
var o2 = { };
o2.__proto__ = o1;
var o3 = { };
o3.__proto__ = o2;

function f(n, x, b) {
  var sum = x.a;
  for (var i = 0; i < n; i++) {
    sum = 1.0 / i;
  }
  return sum;
}
%PrepareFunctionForOptimization(f);

f(10, o3);
f(20, o3);
f(30, o3);
%OptimizeFunctionOnNextCall(f, "concurrent");
f(100000, o3);




o2.a = 5;
%PrepareFunctionForOptimization(f);


%OptimizeFunctionOnNextCall(f);
f(10, o3);



%DisassembleFunction(f);
