





function foo(base) {
  class klass extends base {
    constructor() {
      try {
        undefined();
      } catch (e) {}
        super();
        this.d = 4.2;
        this.o = {};
    }
  }
  var __v_58 = new klass();
  var __v_59 = new klass();
}

%PrepareFunctionForOptimization(foo);
foo(Uint8Array);
foo(Uint8ClampedArray);
foo(Int16Array);
foo(Uint16Array);
foo(Int32Array);
foo(Uint32Array);
%OptimizeFunctionOnNextCall(foo);
assertThrows(foo);
