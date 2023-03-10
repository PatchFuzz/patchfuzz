





function test() {
  let depth = 100;
  const arr = [];
  const factory = class MyArray extends Uint8Array {
    constructor() {
      async function foo() { new factory(); }
      if(depth-- > 0) {
        const x = foo();
        super(arr);
        this.__proto__ = x;
        const unused1 = super.byteLength;
      } else {
        super(arr);
      }
    }
  };
  const unused2 = new factory();
  arr.__proto__ = factory;
  return arr;
}

test();
%PrepareFunctionForOptimization(test);
test();
%OptimizeFunctionOnNextCall(test);
test();
