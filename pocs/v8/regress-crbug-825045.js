const obj = new class A extends async function
() {}
.constructor {}
();
delete obj.name;
Number.prototype.__proto__ = obj;
function foo() {
  return obj.bind();
};
%PrepareFunctionForOptimization(foo);
foo();
foo();
%OptimizeFunctionOnNextCall(foo);
foo();
