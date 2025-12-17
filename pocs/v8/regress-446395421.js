function foo() {
  for (let x in x) {
  }
}

%PrepareFunctionForOptimization(foo);
print(()=>{ foo(); });
print(()=>{ foo(); });
%OptimizeFunctionOnNextCall(foo);
print(()=>{ foo(); });
