




























try {
} catch (e) {
}  

var size = 0x20000;
var a = new Float64Array(size);
var training = new Float64Array(10);
function store(a, index) {
  var offset = 0x20000000;
  for (var i = 0; i < 1; i++) {
    a[index + offset] = 0xcc;
  }
};
%PrepareFunctionForOptimization(store);
store(training, -0x20000000);
store(training, -0x20000000 + 1);
store(training, -0x20000000);
store(training, -0x20000000 + 1);
%OptimizeFunctionOnNextCall(store);


for (var i = -0x20000000; i < -0x20000000 + size; i++) {
  store(a, i);
}
