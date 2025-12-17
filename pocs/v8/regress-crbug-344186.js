var dummy = new Int32Array(100);
var array = new Int32Array(128);
function fun(base) {
  array[base - 95] = 1;
  array[base - 99] = 2;
  array[base + 4] = 3;
};
%PrepareFunctionForOptimization(fun);
fun(100);
%OptimizeFunctionOnNextCall(fun);
fun(0);

for (var i = 0; i < dummy.length; i++) {
  print(0, dummy[i]);
}
