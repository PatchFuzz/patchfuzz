





function opt() {
  try {
    Reflect.apply("".localeCompare, undefined, [undefined]);
    return false;
  } catch(e) {
    return true;
  }
}

%PrepareFunctionForOptimization(opt);
assertTrue(opt());
assertTrue(opt());
%OptimizeFunctionOnNextCall(opt);
assertTrue(opt());
assertTrue(opt());
