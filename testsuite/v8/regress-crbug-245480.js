




























function isHoley(obj) {
  if (%HasHoleyElements(obj)) return true;
  return false;
}

function assertHoley(obj, name_opt) {
  assertEquals(true, isHoley(obj), name_opt);
}

function create_array(arg) {
  return new Array(arg);
};
%PrepareFunctionForOptimization(create_array);
obj = create_array(0);
assertHoley(obj);
create_array(0);
%OptimizeFunctionOnNextCall(create_array);
obj = create_array(10);
assertHoley(obj);


function f(length) {
  return new Array(length);
};
%PrepareFunctionForOptimization(f);
f(0);
f(0);
%OptimizeFunctionOnNextCall(f);
var a = f(10);

function g(a) {
  return a[0];
}

var b = [0];
g(b);
g(b);
assertEquals(undefined, g(a));
