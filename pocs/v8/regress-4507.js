function broken(value) {
  return Math.floor(value / 65536);
}
function toUnsigned(i) {
  return i >>> 0;
}
function outer(i) {
  return broken(toUnsigned(i));
};
%PrepareFunctionForOptimization(outer);
for (var i = 0; i < 5; i++) outer(0);
broken(0x80000000);  
%OptimizeFunctionOnNextCall(outer);
print(32768, outer(0x80000000));
