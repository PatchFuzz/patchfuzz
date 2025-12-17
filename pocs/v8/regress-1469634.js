function Module(stdlib) {
  "use asm";

  var fround = stdlib.Math.fround;

  
  function f(a) {
    a = +a;
    return fround(a);
  }

  return { f: f };
}

var f = Module({ Math }).f;
let count = 0;

let tester = () => {
    return f(140737463189505, 8388607);
}
%PrepareFunctionForOptimization(tester);
tester();
%OptimizeFunctionOnNextCall(tester);
tester();
