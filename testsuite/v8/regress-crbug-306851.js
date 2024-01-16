




























function Counter() {
  this.value = 0;
};

Object.defineProperty(Counter.prototype, 'count', {
  get: function() {
    return this.value;
  },
  set: function(value) {
    this.value = value;
  }
});

var obj = new Counter();

function bummer() {
  obj.count++;
  return obj.count;
};
%PrepareFunctionForOptimization(bummer);
assertEquals(1, bummer());
assertEquals(2, bummer());
assertEquals(3, bummer());
%OptimizeFunctionOnNextCall(bummer);
assertEquals(4, bummer());
assertEquals(5, bummer());
assertEquals(6, bummer());
