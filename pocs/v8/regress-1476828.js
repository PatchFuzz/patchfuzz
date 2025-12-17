function foo(arg) {
  if (arg.f)
    return true;
  else
    return false;
}

let o = {f: %GetUndetectable()};

%PrepareFunctionForOptimization(foo);
print(foo(o));
print(foo(o));
%OptimizeMaglevOnNextCall(foo);
print(foo(o));
