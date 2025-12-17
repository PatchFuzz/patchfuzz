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
print(1, bummer());
print(2, bummer());
print(3, bummer());
%OptimizeFunctionOnNextCall(bummer);
print(4, bummer());
print(5, bummer());
print(6, bummer());
