function opt(){
  const v2 = {"maxByteLength":4886690};
  const v4 = new ArrayBuffer(1458,v2);
  const v6 = new Int8Array(v4);
  const v8 = Symbol.toStringTag;
  const v9 = v6[v8];
  return v9;
}

let ignition = opt();
%PrepareFunctionForOptimization(opt);
opt();
%OptimizeFunctionOnNextCall(opt);
let turbofan = opt();
print(ignition, turbofan);
