(function() {
  function eq(a, b) { return a == b; }

  var o = { [Symbol.toPrimitive]: () => "o" };

  %PrepareFunctionForOptimization(eq);
  print(eq(o, o));
  print(eq(o, o));
  %OptimizeFunctionOnNextCall(eq);
  print(eq(o, o));
  print(eq("o", o));
  %PrepareFunctionForOptimization(eq);
  print(eq(o, "o"));
  %OptimizeFunctionOnNextCall(eq);
  print(eq(o, o));
  print(eq("o", o));
  print(eq(o, "o"));
  print(eq);
})();

(function() {
  function ne(a, b) { return a != b; }

  var o = { [Symbol.toPrimitive]: () => "o" };

  %PrepareFunctionForOptimization(ne);
  print(ne(o, o));
  print(ne(o, o));
  %OptimizeFunctionOnNextCall(ne);
  print(ne(o, o));
  print(ne("o", o));
  %PrepareFunctionForOptimization(ne);
  print(ne(o, "o"));
  %OptimizeFunctionOnNextCall(ne);
  print(ne(o, o));
  print(ne("o", o));
  print(ne(o, "o"));
  print(ne);
})();

(function() {
  function eq(a, b) { return a == b; }

  var a = {};
  var b = {b};
  var u = %GetUndetectable();

  %PrepareFunctionForOptimization(eq);
  print(eq(a, a));
  print(eq(b, b));
  print(eq(a, b));
  print(eq(b, a));
  print(eq(a, a));
  print(eq(b, b));
  print(eq(a, b));
  print(eq(b, a));
  %OptimizeFunctionOnNextCall(eq);
  print(eq(a, a));
  print(eq(b, b));
  print(eq(a, b));
  print(eq(b, a));
  print(eq(null, u));
  %PrepareFunctionForOptimization(eq);
  print(eq(undefined, u));
  print(eq(u, null));
  print(eq(u, undefined));
  %OptimizeFunctionOnNextCall(eq);
  print(eq(a, a));
  print(eq(b, b));
  print(eq(a, b));
  print(eq(b, a));
  print(eq(null, u));
  print(eq(undefined, u));
  print(eq(u, null));
  print(eq(u, undefined));
  print(eq);
})();

(function() {
  function ne(a, b) { return a != b; }

  var a = {};
  var b = {b};
  var u = %GetUndetectable();

  %PrepareFunctionForOptimization(ne);
  print(ne(a, a));
  print(ne(b, b));
  print(ne(a, b));
  print(ne(b, a));
  print(ne(a, a));
  print(ne(b, b));
  print(ne(a, b));
  print(ne(b, a));
  %OptimizeFunctionOnNextCall(ne);
  print(ne(a, a));
  print(ne(b, b));
  print(ne(a, b));
  print(ne(b, a));
  print(ne(null, u));
  %PrepareFunctionForOptimization(ne);
  print(ne(undefined, u));
  print(ne(u, null));
  print(ne(u, undefined));
  %OptimizeFunctionOnNextCall(ne);
  print(ne(a, a));
  print(ne(b, b));
  print(ne(a, b));
  print(ne(b, a));
  print(ne(null, u));
  print(ne(undefined, u));
  print(ne(u, null));
  print(ne(u, undefined));
  print(ne);
})();
