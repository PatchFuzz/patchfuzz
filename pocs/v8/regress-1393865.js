function aux(a, b) {
  if (a) {
    a >> b;
  }
}

function opt() {
  let p = Promise;
  ++p;
  
  return aux(p, "number");
}

%PrepareFunctionForOptimization(aux);
aux(1n, 1n);
%OptimizeFunctionOnNextCall(aux);
aux(1n, 1n);

%PrepareFunctionForOptimization(opt);
opt();
%OptimizeFunctionOnNextCall(opt);
opt();
