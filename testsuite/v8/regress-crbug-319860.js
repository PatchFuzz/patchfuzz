




























function read(a, index) {
  var offset = 0x2000000;
  var result;
  for (var i = 0; i < 1; i++) {
    result = a[index + offset];
  }
  return result;
}

%PrepareFunctionForOptimization(read);
var a = new Int8Array(0x2000001);
read(a, 0);
read(a, 0);
%OptimizeFunctionOnNextCall(read);


for (var i = 0; i > -100000; i -= 987) {
  assertEquals(0, read(a, i));
}
