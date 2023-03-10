





var global = true;
global = false;

function f() {
  return !global;
}

%PrepareFunctionForOptimization(f);
%OptimizeFunctionOnNextCall(f);
print(f());
