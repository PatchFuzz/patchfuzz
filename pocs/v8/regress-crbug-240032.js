function mk() {
  return function() {};
}
print(mk(), Function);
print(mk(), Function);


var o = {};
o.func = mk();


function cmp(o, f) {
  return f === o.func;
};
%PrepareFunctionForOptimization(cmp);
print(cmp(o, o.func));
print(cmp(o, o.func));
%OptimizeFunctionOnNextCall(cmp);
print(cmp(o, o.func));
