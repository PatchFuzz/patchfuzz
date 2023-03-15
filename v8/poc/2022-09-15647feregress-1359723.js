





function f(__v_51, __v_52, __v_53) {
  var a = false;
  var b = a;
  try {
    var c = false + false;
  } catch {}
  try {
    var d = false - (null == true);
  } catch {}
  return a + b - c + d;
}
%PrepareFunctionForOptimization(f);
print(0, f());
%OptimizeMaglevOnNextCall(f);
print(0, f());
