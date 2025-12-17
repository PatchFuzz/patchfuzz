function* foo() {
  __v_1 = foo.x;   
  for (;;) {
    try {
      yield;
      try {
        __v_0 == "object";
        __v_1[__getRandomProperty()]();
      } catch(e) {
        print();
      }
    } catch(e) {
      "Caught: " + e;
    }
    break;
  }
};

%PrepareFunctionForOptimization(foo);
%OptimizeFunctionOnNextCall(foo);
foo();
