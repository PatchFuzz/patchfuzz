function test(crc32) {
  for (var i = 0; i < 256; i++) {
    var c = i;
    for (var j = 0; j < 8; j++) {
      if (c & 1) {
        c = -306674912 ^ c >> 1 & 0x7fffffff;
      } else {
        c = c >> 1 & 0x7fffffff;
      }
    }
    crc32[i] = c;
  }
};
%PrepareFunctionForOptimization(test);
var a = [0.5];
for (var i = 0; i < 256; ++i) a[i] = i;

test([0.5]);
test(a);
%OptimizeFunctionOnNextCall(test);
test(a);
