





var o = {};
function bar() {
  o[0] = +o[0];
  o = /\u23a1|__v_4/;
}
bar();
bar();
bar();
function foo() {
  bar();
};
%PrepareFunctionForOptimization(foo);
%OptimizeFunctionOnNextCall(foo);
foo();
