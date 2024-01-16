





function C() { }

function f(b) {
  var o = new C();
  
  
  if (b) o.t = 1.1;
  %_DeoptimizeNow();
  return o.t;
}
%PrepareFunctionForOptimization(f);


for (var i = 0; i < 1000; i++) new C();

f(true);
f(true);
f(false);

%OptimizeFunctionOnNextCall(f);

assertEquals(1.1, f(true));
