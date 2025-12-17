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
print(1, f(aa));
print(1, f(aa));
print(2, f(bb));
print(2, f(bb));
%OptimizeFunctionOnNextCall(f);
print(1, f(aa));
print(2, f(bb));
