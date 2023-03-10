





function foo(__v_6, __v_7) {
  return +__v_6.x;
}

%PrepareFunctionForOptimization(foo);
foo({ x: 42 });
foo(false);
%OptimizeMaglevOnNextCall(foo);
foo(false);

print(NaN, foo(false));
