function f0() {
  let v2 = 1.0;
  v2--;
  const v4 = [-8.6, -1.1];
  function f5(a6) {
    return a6.at();
  }
  %PrepareFunctionForOptimization(f5);
  try {
    
    
    v8 = f5(v2);
  } catch (e) {}
  
  f5(v4);
}
%PrepareFunctionForOptimization(f0);
f0();
const v11 = f0();
%OptimizeMaglevOnNextCall(f0);
f0();
