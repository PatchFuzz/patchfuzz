let v15 = 0;
const v22 = [];
let v23 = -1;
function f25(a) {
  (() => {
      v23--;
      function C(b) {}
      new C(a);
  })();
}
%PrepareFunctionForOptimization(f25);
f25({});
%OptimizeFunctionOnNextCall(f25);
f25({});
