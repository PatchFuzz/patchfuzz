






function foo(v) {
  let x = Math.floor(v);
  Number.prototype[v] = 42;
  return x + Math.floor(v);
}

%PrepareFunctionForOptimization(foo);
print(foo(-0), -0);
print(foo(-0), -0);
%OptimizeFunctionOnNextCall(foo);
print(foo(-0), -0);


function bar(v) {
  v = v ? (v|0) : -0;  
  let x = Math.floor(v);
  Number.prototype[v] = 42;
  return x + Math.floor(v);
}

%PrepareFunctionForOptimization(bar);
print(2, bar(1));
print(2, bar(1));
%OptimizeFunctionOnNextCall(bar);
print(-0, bar(-0));
