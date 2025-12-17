function f0(a1) {
  let v10 = Math.max((a1 | 0) * (2 ** 52), 4294967297);
  v10--;
  return v10 + v10;
}

%PrepareFunctionForOptimization(f0);
f0(0); 
%OptimizeFunctionOnNextCall(f0);
f0(0); 

function f1() {
  f0(1);
  return 1;
}
%PrepareFunctionForOptimization(f1);
f1(); 
%OptimizeFunctionOnNextCall(f1);
f1(); 
      
