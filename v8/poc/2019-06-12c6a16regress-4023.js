





function Inner() {
  this.property = "OK";
  this.prop2 = 1;
}

function Outer() {
  this.o = "u";
}
function KeepMapAlive(o) {
  return o.o;
};
%PrepareFunctionForOptimization(KeepMapAlive);
function SetInner(o, i) {
  o.inner_field = i;
};
%PrepareFunctionForOptimization(SetInner);
function Crash(o) {
  return o.inner_field.property;
};
%PrepareFunctionForOptimization(Crash);
var inner = new Inner();
var outer = new Outer();


SetInner(new Outer(), inner);
SetInner(outer, inner);




KeepMapAlive(outer);
KeepMapAlive(outer);
%DisableOptimizationFinalization();
%OptimizeFunctionOnNextCall(KeepMapAlive, "concurrent");
KeepMapAlive(outer);
%WaitForBackgroundOptimization();


print(Crash(outer));
print(Crash(outer));
%OptimizeFunctionOnNextCall(Crash);
print(Crash(outer));




inner = undefined;
outer = undefined;
gc();






%OptimizeFunctionOnNextCall(SetInner);



var o2 = new Outer();
SetInner(o2, { invalid: 1.51, property: "OK" });



print(Crash(o2));
