for (let i = 0; i < 1000; ++i) {
  var wrapper = new String('wrappercontent');
}
function f() {
  'stringcontent' + wrapper;
}
%PrepareFunctionForOptimization(f);
f();
%OptimizeFunctionOnNextCall(f);
f();
