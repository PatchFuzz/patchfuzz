var dummy = {foo: "true"};

var a = {y:0.5};
a.y = 357;
var b = a.y;

var d;
function f(  )  {
  d = 357;
  return {foo: b};
}
%PrepareFunctionForOptimization(f);
f();
f();
%OptimizeFunctionOnNextCall(f);
var x = f();




function g(obj) {
  return obj.foo.length;
}

%PrepareFunctionForOptimization(g);
g(dummy);
g(dummy);
%OptimizeFunctionOnNextCall(g);
g(x);
