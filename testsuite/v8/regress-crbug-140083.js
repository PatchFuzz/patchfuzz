






























Object.defineProperty(Object.prototype, 'foo', {
  get: function() {
    return 123;
  }
});

function bar(o) {
  o.foo += 42;
  o.foo++;
};
%PrepareFunctionForOptimization(bar);
var baz = {};
bar(baz);
bar(baz);
%OptimizeFunctionOnNextCall(bar);
bar(baz);
