const buf = new SharedArrayBuffer(8, { "maxByteLength": 8 });

class obj extends Uint8ClampedArray {
  constructor() {
    super(buf);
  }
  defineProperty() {
    for (let i = 0; i < 3; i++) {
      super.length;
    }
    SharedArrayBuffer.__proto__ = this;
  }
}

function opt() {
  new obj().defineProperty();
}

%PrepareFunctionForOptimization(opt);
opt();
opt();
opt();
opt();
%OptimizeFunctionOnNextCall(opt)
opt();
