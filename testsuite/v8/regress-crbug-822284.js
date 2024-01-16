





function foo(a) {
  a = "" + Math.abs(a);
  return a.charCodeAt(0);
}


%PrepareFunctionForOptimization(foo);
String.fromCharCode(49);

const o = {};
o[1..toString()] = 1;

assertEquals(49, foo(1));
assertEquals(49, foo(1));
%OptimizeFunctionOnNextCall(foo);
assertEquals(49, foo(1));
