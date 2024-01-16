






























var t = {foo: function() {}};

var f = function bar() {
  t.foo();
  assertEquals('function', typeof bar);
};
;
%PrepareFunctionForOptimization(f);
for (var i = 0; i < 10; i++) f();
%OptimizeFunctionOnNextCall(f);
t.number = 2;
f();
