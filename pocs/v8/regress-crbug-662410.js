function g(v) {
  return v.constructor;
}

g({});
g({});

function f() {
  var i = 0;
  do {
    i = i + 1;
    g(i);
  } while (i < 1);
};
%PrepareFunctionForOptimization(f);
%OptimizeFunctionOnNextCall(f);
f();
