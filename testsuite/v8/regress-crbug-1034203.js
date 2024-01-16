





function foo(optimized) {
  class C {
    ['h']() {}
  }
  let h = C.prototype.h;
  h.bind();
}

%PrepareFunctionForOptimization(foo);
foo();
%OptimizeFunctionOnNextCall(foo);
foo();
