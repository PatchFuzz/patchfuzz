





function Thingy() {}
Thingy.prototype = {
  foo: function() { return 42; }
};

const x = new Thingy();

function f(o) {
  return o.foo();
}

%PrepareFunctionForOptimization(f);
print(42, f(x));
%OptimizeMaglevOnNextCall(f);
print(42, f(x));

Thingy.prototype.foo = function() { return 56; }
print(56, f(x));
