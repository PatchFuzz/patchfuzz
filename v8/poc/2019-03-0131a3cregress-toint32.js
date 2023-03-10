




























var a = new Int32Array(1);
var G = 0x80000000;

function f(x) {
  var v = x;
  v = v + 1;
  a[0] = v;
  v = v - 1;
  return v;
}

%PrepareFunctionForOptimization(f);
print(G, f(G));
print(G, f(G));
%OptimizeFunctionOnNextCall(f);
print(G, f(G));
