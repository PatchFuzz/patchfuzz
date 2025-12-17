const obj = new class C extends async function () {}.constructor {}();
delete obj.name;

Number.prototype.__proto__ = obj;
function foo() {
  return obj.bind();
}

%PrepareFunctionForOptimization(foo);
foo();
obj[undefined] = Map, gc();
%OptimizeFunctionOnNextCall(foo);
foo();
