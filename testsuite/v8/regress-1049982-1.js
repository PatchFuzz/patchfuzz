





const xs = [1,2,3,4,5,6,7,8,9];
let deopt = false;

function g(acc, x, i) {
  if (deopt) {
    assertFalse(%IsBeingInterpreted());
    Array.prototype.x = 42;  
    deopt = false;
  }
  return acc + x;
}

function f() {
  return xs.reduce(g, 0);
}

%PrepareFunctionForOptimization(f);
%PrepareFunctionForOptimization(g);
assertEquals(45, f());
assertEquals(45, f());
%OptimizeFunctionOnNextCall(f);

deopt = true;
assertEquals(45, f());
assertEquals(45, f());
