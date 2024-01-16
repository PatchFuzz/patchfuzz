




























function g(max, val) {
  this.x = 0;
  for (var i = 0; i < max; i++) {
    this.x = i / 100;
  }
  this.val = val;
}

function f(max) {
  var val = 0.5;
  var obj = new g(max, val);
  assertSame(val, obj.val);
};
%PrepareFunctionForOptimization(f);
f(1);
f(1);
%OptimizeFunctionOnNextCall(f);
f(200000);
