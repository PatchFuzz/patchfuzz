const xs = [1,2,3,4,5,6,7,8,9];
let deopt = false;

function g(acc, x, i) {
  if (deopt) {
    print(%IsBeingInterpreted());
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
print(45, f());
print(45, f());
%OptimizeFunctionOnNextCall(f);

deopt = true;
print(45, f());
print(45, f());
