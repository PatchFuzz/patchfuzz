const v9 = new Int16Array(122);

function f20() {}
const prom = new Promise(f20);

function test(x) {
  new prom.constructor(x);
}

function foo(x) {
  %PrepareFunctionForOptimization(test);
  test(x);
  %OptimizeFunctionOnNextCall(test);
  return foo;
}

const c = foo(foo);
print(() => v9.find(c, {}), TypeError, "Promise resolver 0 is not a function");
