function getLength() { return arr.length; }

var buf = new ArrayBuffer(0x10000);
var arr = new Uint8Array(buf);

%ArrayBufferDetach(arr.buffer);
%PrepareFunctionForOptimization(getLength);
print(0, getLength());
%OptimizeFunctionOnNextCall(getLength);
print(0, getLength());
