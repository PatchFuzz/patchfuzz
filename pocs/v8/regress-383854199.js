let a;
function write(i) {
  a = 42 + i - i;
}
%PrepareFunctionForOptimization(write);
write(0x7fff0000);
%OptimizeFunctionOnNextCall(write);
write(0x7fff0000);



%NeverOptimizeFunction(assertEquals);
for (let i = 0; i < 5000; i++) {
  print(42, a);
}
