function f(a, i, bool) {
  var result;
  if (bool) {
    
    
    result = f2(a, 0x7fffffff, i, i, -0x80000000);
  } else {
    result = f2(a, -3, 4, i, 0);
  }
  return result;
}
%PrepareFunctionForOptimization(f);

function f2(a, c, x, i, d) {
  return a[x + c] + a[x - 0] + a[i - d];
}


var a = [];
var i = 0;
a.push(i++);
a.push(i++);
a.push(i++);
a.push(i++);
a.push(i++);
f(a, 0, false);
f(a, 0, false);
f(a, 0, false);
%OptimizeFunctionOnNextCall(f);
%DebugPrint(f(a, -0x7fffffff, true));
