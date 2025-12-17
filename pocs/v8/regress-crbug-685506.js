var a = {};

function init() {
  a = [];
  for (var __v_1 = 0; __v_1 < 10016; __v_1++) {
    a.push({});
  }
  a.map(function() {}) + '';
}
init();

function foo() {
  a.push((a + "!", 23));
  return a;
};
%PrepareFunctionForOptimization(foo);
print(23, foo()[10016]);
print(23, foo()[10017]);
print(23, foo()[10018]);
%OptimizeFunctionOnNextCall(foo);
print(23, foo()[10019]);
