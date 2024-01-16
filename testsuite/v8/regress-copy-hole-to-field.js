





























var a = [1.5, , 1.7];
var o = {a: 1.8};

function f1(o, a, i) {
  o.a = a[i];
};
%PrepareFunctionForOptimization(f1);
f1(o, a, 0);
f1(o, a, 0);
assertEquals(1.5, o.a);
%OptimizeFunctionOnNextCall(f1);
f1(o, a, 1);
assertEquals(undefined, o.a);


var a = [1, , 3];
var o = {ab: 5};

function f2(o, a, i) {
  o.ab = a[i];
};
%PrepareFunctionForOptimization(f2);
f2(o, a, 0);
f2(o, a, 0);
%OptimizeFunctionOnNextCall(f2);
f2(o, a, 1);
assertEquals(undefined, o.ab);
