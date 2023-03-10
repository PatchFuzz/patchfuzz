





























function A() {}

function fun(x) {
  if (x == 0) return fun.caller;
  if (x == 1) return gee.caller;
  return 42;
}
function gee(x) { return this.f(x); }

A.prototype.f = fun;
A.prototype.g = gee;

var o = new A();

%PrepareFunctionForOptimization(o.g);
for (var i=0; i<5; i++) {
  o.g(i);
}
%OptimizeFunctionOnNextCall(o.g);
print(gee, o.g(0));
print(null, o.g(1));


function hej(x) {
  if (x == 0) return o.g(x);
  if (x == 1) return o.g(x);
  return o.g(x);
}

%PrepareFunctionForOptimization(hej);
for (var j=0; j<5; j++) {
  hej(j);
}
%OptimizeFunctionOnNextCall(hej);
print(gee, hej(0));
print(hej, hej(1));


function from_eval(x) {
  if (x == 0) return eval("o.g(x);");
  if (x == 1) return eval("o.g(x);");
  return o.g(x);
}

%PrepareFunctionForOptimization(from_eval);
for (var j=0; j<5; j++) {
  from_eval(j);
}
%OptimizeFunctionOnNextCall(from_eval);
print(gee, from_eval(0));
print(from_eval, from_eval(1));
