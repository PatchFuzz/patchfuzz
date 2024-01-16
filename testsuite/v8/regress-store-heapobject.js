





var o = {a: undefined};

function store(o, v) {
  o.a = v;
}

store(o, undefined);
store(o, undefined);

function f(bool) {
  var o = {a: undefined};
  if (bool) {
    store(o, 1);
  }
  return o;
};
%PrepareFunctionForOptimization(f);
f(false);
f(false);
%OptimizeFunctionOnNextCall(f);
f(true);
