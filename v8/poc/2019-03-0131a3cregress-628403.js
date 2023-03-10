





var dothrow = false;

function g() {
  if (dothrow) throw 1;
}

function f(a) {
  try {
    g();
  } catch(e) {
    if (typeof e !== 'number' && e !== 1) throw e;
    return a[0];
  }
}

%NeverOptimizeFunction(g);
%PrepareFunctionForOptimization(f);
f();
f();
%OptimizeFunctionOnNextCall(f);
dothrow = true;
print(42, f([42]));
