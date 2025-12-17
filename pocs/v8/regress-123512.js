function f(x) {
  return [x][0];
};
%PrepareFunctionForOptimization(f);


Object.prototype[0] = 23;
print(1, f(1));
print(2, f(2));
%OptimizeFunctionOnNextCall(f);
print(3, f(3));
%DeoptimizeFunction(f);


Object.prototype.__defineGetter__(0, function() { throw Error(); });
print(4, f(4));
print(5, f(5));
%PrepareFunctionForOptimization(f);
%OptimizeFunctionOnNextCall(f);
print(6, f(6));
%DeoptimizeFunction(f);




function g(x, y) {
  var o = { foo:x, 0:y };
  return o.foo + o[0];
};
%PrepareFunctionForOptimization(g);


Object.prototype[0] = 23;
Object.prototype.foo = 42;
print(3, g(1, 2));
print(5, g(2, 3));
%OptimizeFunctionOnNextCall(g);
print(7, g(3, 4));
%DeoptimizeFunction(g);


Object.prototype.__defineGetter__(0, function() { throw Error(); });
Object.prototype.__defineGetter__('foo', function() { throw Error(); });
print(3, g(1, 2));
print(5, g(2, 3));
%PrepareFunctionForOptimization(g);
%OptimizeFunctionOnNextCall(g);
print(7, g(3, 4));
%DeoptimizeFunction(g);
