
































function f(x) {
  return [x][0];
};
%PrepareFunctionForOptimization(f);


Object.prototype[0] = 23;
assertSame(1, f(1));
assertSame(2, f(2));
%OptimizeFunctionOnNextCall(f);
assertSame(3, f(3));
%DeoptimizeFunction(f);


Object.prototype.__defineGetter__(0, function() { throw Error(); });
assertSame(4, f(4));
assertSame(5, f(5));
%PrepareFunctionForOptimization(f);
%OptimizeFunctionOnNextCall(f);
assertSame(6, f(6));
%DeoptimizeFunction(f);




function g(x, y) {
  var o = { foo:x, 0:y };
  return o.foo + o[0];
};
%PrepareFunctionForOptimization(g);


Object.prototype[0] = 23;
Object.prototype.foo = 42;
assertSame(3, g(1, 2));
assertSame(5, g(2, 3));
%OptimizeFunctionOnNextCall(g);
assertSame(7, g(3, 4));
%DeoptimizeFunction(g);


Object.prototype.__defineGetter__(0, function() { throw Error(); });
Object.prototype.__defineGetter__('foo', function() { throw Error(); });
assertSame(3, g(1, 2));
assertSame(5, g(2, 3));
%PrepareFunctionForOptimization(g);
%OptimizeFunctionOnNextCall(g);
assertSame(7, g(3, 4));
%DeoptimizeFunction(g);
