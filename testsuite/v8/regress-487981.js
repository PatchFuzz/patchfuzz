







function __f_2(o) {
  return o.field.b.x;
}

%PrepareFunctionForOptimization(__f_2);

try {
  %OptimizeFunctionOnNextCall(__f_2);
  __v_1 = __f_2();
} catch (e) { }

function __f_3() { __f_3(/./.test()); };

try {
  __f_3();
} catch (e) { }
