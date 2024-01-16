





function f() {
  let a = 42n;
  
  let b = a--;
  let c = -42n && 42n;
  
  
  let d = c & a;
};

%PrepareFunctionForOptimization(f);
f();
%OptimizeFunctionOnNextCall(f);
f();
