





























function f(o) {
  o.x++;
};
%PrepareFunctionForOptimization(f);
;
var o = {x: 5};
Object.freeze(o);
f(o);
f(o);
%OptimizeFunctionOnNextCall(f);
f(o);
assertEquals(5, o.x);


function f2(o) {
  o.x += 3;
};
%PrepareFunctionForOptimization(f2);
;
f2(o);
f2(o);
%OptimizeFunctionOnNextCall(f2);
f2(o);
assertEquals(5, o.x);
