function foo(word, nBits) {
  return word[1] >>> nBits | word[0] << 32 - nBits;
};
%PrepareFunctionForOptimization(foo);
word = [0x1001, 0];

var expected = foo(word, 1);
foo(word, 1);
%OptimizeFunctionOnNextCall(foo);
var optimized = foo(word, 1);
print(expected, optimized);
