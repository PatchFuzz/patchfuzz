function isHoley(obj) {
  if (%HasHoleyElements(obj)) return true;
  return false;
}

function print(obj, name_opt) {
  print(true, isHoley(obj), name_opt);
}

function create_array(arg) {
  return new Array(arg);
};
%PrepareFunctionForOptimization(create_array);
obj = create_array(0);
print(obj);
create_array(0);
%OptimizeFunctionOnNextCall(create_array);
obj = create_array(10);
print(obj);


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
print(undefined, g(a));
