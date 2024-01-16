




























function a() {
  this.x = 1;
}
var aa = new a();
%DebugPrint(aa);

function b() {
  this.z = 23;
  this.x = 2;
}
var bb = new b();
%DebugPrint(bb);

function f(o) {
  return o.x;
};
%PrepareFunctionForOptimization(f);
assertSame(1, f(aa));
assertSame(1, f(aa));
assertSame(2, f(bb));
assertSame(2, f(bb));
%OptimizeFunctionOnNextCall(f);
assertSame(1, f(aa));
assertSame(2, f(bb));
