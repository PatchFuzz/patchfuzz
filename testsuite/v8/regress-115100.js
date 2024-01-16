




























function foo(obj) {
  obj.prop = 0;
};
%PrepareFunctionForOptimization(foo);
function mk() {
  return Object.create(null);
}

foo(mk());
foo(mk());
%OptimizeFunctionOnNextCall(foo);
foo(mk());
