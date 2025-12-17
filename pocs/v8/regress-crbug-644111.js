function Module() {
  "use asm";
  return {};
}

%PrepareFunctionForOptimization(Module);
var m = Module();
%OptimizeFunctionOnNextCall(Module);
m = Module();
