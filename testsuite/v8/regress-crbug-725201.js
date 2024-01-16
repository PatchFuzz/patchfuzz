





function __f_1() {
  function __f_2() {
    Array.prototype.__proto__ = { 77e4  : null };
  }
  %PrepareFunctionForOptimization(__f_2);
  __f_2();
  %OptimizeFunctionOnNextCall(__f_2);
  __f_2();
}
try {
__f_1();
} catch(e) {; }
for (var __v_6 in [(1.2)]) {  }

%HeapObjectVerify([(1.2)]);
