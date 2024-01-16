





const r = /x/;
let counter = 0;

r.exec = () => { counter++; return null; }

function f() {
  r.test("ABcd");
}

%PrepareFunctionForOptimization(f);
f();
assertEquals(1, counter);
%OptimizeFunctionOnNextCall(f);

f();
assertEquals(2, counter);
