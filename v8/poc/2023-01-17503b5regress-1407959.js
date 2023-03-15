





function func() {}
function foo(x) {
  return x instanceof func;
}

%PrepareFunctionForOptimization(foo);
foo();
foo();
%OptimizeMaglevOnNextCall(foo);
foo();

let custom_has_instance_runs = 0;
Object.defineProperty(func, Symbol.hasInstance, {
  value: function() {
    custom_has_instance_runs++;
    return true;
  }
});

print(foo());
print(custom_has_instance_runs, 1);
