function t_smi(a) {
  a[0] = 1.5;
};
%PrepareFunctionForOptimization(t_smi);
t_smi([1, , 3]);
t_smi([1, , 3]);
t_smi([1, , 3]);
%OptimizeFunctionOnNextCall(t_smi);
var ta = [1, , 3];
t_smi(ta);
print([1.5, , 3], ta);
