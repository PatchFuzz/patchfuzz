function f() {};
%PrepareFunctionForOptimization(f);
f();
f();
%OptimizeFunctionOnNextCall(f);
f();
%DeoptimizeFunction(f);

%DisassembleFunction(f);
