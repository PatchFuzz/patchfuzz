function f() {
  const o = {};
  
  o.a = 0;
  o[1024] = 1;  
  delete o.a;
  o.b = 2;
  return o.b;
}
%PrepareFunctionForOptimization(f);
f();
f();
%OptimizeFunctionOnNextCall(f);
f();


function g(o) {
  o.b = 2;
}
function h() {
  const o = {};
  o.a = 0;
  o[1024] = 1;
  delete o.a;
  g(o);
  print(o.b, 2);
}
%NeverOptimizeFunction(g);
%PrepareFunctionForOptimization(h);
h();
h();
%OptimizeFunctionOnNextCall(h);
h();
