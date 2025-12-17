var u = new Uint32Array(2);
u[0] = 1;
u[1] = 0xEE6B2800;

var a = [0, 1, 2];
a[0] = 0;  
print(%HasSmiElements(a));

function foo(i) {
  a[0] = u[i];
  return a[0];
};
%PrepareFunctionForOptimization(foo);
print(u[0], foo(0));
print(u[0], foo(0));
%OptimizeFunctionOnNextCall(foo);
print(u[1], foo(1));
