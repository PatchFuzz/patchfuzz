function opt() {
  try {
    Reflect.apply("".localeCompare, undefined, [undefined]);
    return false;
  } catch(e) {
    return true;
  }
}

%PrepareFunctionForOptimization(opt);
print(opt());
print(opt());
%OptimizeFunctionOnNextCall(opt);
print(opt());
print(opt());
