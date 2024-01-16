





function opt() {
  const buffer = new ArrayBuffer(64);
  const view = new DataView(buffer);
  let i = 1n;
  i += 1n;
  view.setUint8(i);
}

%PrepareFunctionForOptimization(opt);
assertThrows(opt, TypeError);
%OptimizeFunctionOnNextCall(opt);
assertThrows(opt, TypeError);
