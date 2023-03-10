





function foo(arg_true) {
  let o = {c0: 0};
  let c0a = arg_true ? 0 : "x";
  let c0 = Math.max(c0a, 0) + c0a;
  let v01 = 2**32 + (o.c0 & 1);
  let ra = ((2**32 - 1) >>> c0) - v01;
  let rb = (-1) << (32 - c0);
  return (ra^rb) >> 31;
}

%PrepareFunctionForOptimization(foo);
print(0, foo(true));
print(0, foo(true));
%OptimizeFunctionOnNextCall(foo);
print(0, foo(true));
