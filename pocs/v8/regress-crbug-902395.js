function opt() {
  try {
    Object.seal({});
  } finally {
    try {
      
      
      ({toString() {}})
          .

          apply(-1)
          .x();
    } finally {
      if (2.2) {
        return;
      }
      
      try {
        Reflect.construct;
      } finally {
      }
    }
  }
};
%PrepareFunctionForOptimization(opt);
opt();
%OptimizeFunctionOnNextCall(opt);
opt();
