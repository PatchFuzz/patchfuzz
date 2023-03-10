





global = 1;

function boom(value) {
  return global;
}

%PrepareFunctionForOptimization(boom);
print(1, boom());
print(1, boom());
%DisableOptimizationFinalization();
%OptimizeFunctionOnNextCall(boom, "concurrent");
print(1, boom());

%WaitForBackgroundOptimization();
this.__defineGetter__("global", () => 42);
%FinalizeOptimization();


print(boom);

print(42, boom());
