function __f_4() {
  var __v_3 = function() {};
  var __v_5 = __v_3.prototype;
  Number.prototype.__proto__ = __v_3;
  __v_5, __v_3.prototype;
}
%PrepareFunctionForOptimization(__f_4);
for (let i = 0; i < 100; i++) __f_4();
