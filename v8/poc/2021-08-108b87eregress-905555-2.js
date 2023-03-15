





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
delete this.global;
%FinalizeOptimization();


print(boom);

print(boom);
