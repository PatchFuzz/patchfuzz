function observe(x, y) {
  return x;
}
function test(x) {
  return observe(1, (x ? observe(observe.prototype.x) : 'c', x + 1));
};
%PrepareFunctionForOptimization(test);
for (var i = 0; i < 5; ++i) test(0);
%OptimizeFunctionOnNextCall(test);
test(0);

test("a");
