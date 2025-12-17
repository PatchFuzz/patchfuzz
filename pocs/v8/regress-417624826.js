function foo(x) {
  x + x * 2 ** 52;
}

%PrepareFunctionForOptimization(foo);
foo(0); 
        

%OptimizeFunctionOnNextCall(foo);
function bar() {
  foo(1);
}

%PrepareFunctionForOptimization(bar);
bar(); 
%OptimizeFunctionOnNextCall(bar);
bar(); 
       
