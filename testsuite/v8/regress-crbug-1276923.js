






function foo() {
  let i = 0.1;
  eval();
  if (i) {
    const c = {};
    eval();
  }
}
%PrepareFunctionForOptimization(foo);
foo();
foo();
%OptimizeFunctionOnNextCall(foo);
foo();


function bar() {
  for (let cnt = 0, i = 655; cnt < 10000 && i !== 1; cnt++, i = i / 3) {
    i %= 2;
    const c = { "b": 1, "a":1, "c": 1,  "d": 1 };
    eval();
  }
}
bar();
