





function __f_7586(__v_27535) {
  let a = __v_27535.shift();
  return a;
};
%PrepareFunctionForOptimization(__f_7586);
function __f_7587() {
  var __v_27536 = [1, 15, 16];
  __f_7586(__v_27536);
  __v_27536.unshift(__v_27536);
}
__f_7587();
__f_7587();

%OptimizeFunctionOnNextCall(__f_7586);
__f_7587();
