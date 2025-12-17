function main() {
  var v0 = [function f4() {}];
  var err = new Error();
  err.stack;
  try {
    v0();
  } catch (e) {
    print(e);
    e.stack;
  }
}

Error.prepareStackTrace = function(v1, v2) {
  gc();
};

%PrepareFunctionForOptimization(main);
main();
%OptimizeMaglevOnNextCall(main);
main();
