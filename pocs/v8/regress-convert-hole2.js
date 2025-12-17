var a = [1.5, , 1.8];

function f(a, i, l) {
  var v = a[i];
  return l + v;
}

%PrepareFunctionForOptimization(f);
print("test1.5", f(a, 0, "test"));
print("test1.5", f(a, 0, "test"));
%OptimizeFunctionOnNextCall(f);
print("testundefined", f(a, 1, "test"));


function f2(b, a1, a2) {
  var v;
  if (b) {
    v = a1[0];
  } else {
    v = a2[0];
  }
  x = v * 2;
  return "test" + v + x;
}

%PrepareFunctionForOptimization(f2);
f2(true, [1.4,1.8,,1.9], [1.4,1.8,,1.9]);
f2(true, [1.4,1.8,,1.9], [1.4,1.8,,1.9]);
f2(false, [1.4,1.8,,1.9], [1.4,1.8,,1.9]);
f2(false, [1.4,1.8,,1.9], [1.4,1.8,,1.9]);
%OptimizeFunctionOnNextCall(f2);
print("testundefinedNaN", f2(false, [,1.8,,1.9], [,1.9,,1.9]));


function t_smi(a) {
  a[0] = 1.5;
}

%PrepareFunctionForOptimization(t_smi);
t_smi([1,,3]);
t_smi([1,,3]);
t_smi([1,,3]);
%OptimizeFunctionOnNextCall(t_smi);
var ta = [1,,3];
t_smi(ta);
ta.__proto__ = [6,6,6];
print([1.5,6,3], ta);


function t(b) {
  b[1] = {};
}

%PrepareFunctionForOptimization(t);
t([1.4, 1.6,,1.8, NaN]);
t([1.4, 1.6,,1.8, NaN]);
%OptimizeFunctionOnNextCall(t);
var a = [1.6, 1.8,,1.9, NaN];
t(a);
a.__proto__ = [6,6,6,6,6];
print([1.6, {}, 6, 1.9, NaN], a);
