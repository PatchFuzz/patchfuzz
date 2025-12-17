function f() {
  var a = new Array(84632);
  
  
  var b = new Array(84632);
  var c = new Array(84632);
  return [a, b, c];
};
%PrepareFunctionForOptimization(f);
f();
f();
%OptimizeFunctionOnNextCall(f);
for (var i = 0; i < 10; i++) {
  f();
}
