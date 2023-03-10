





var arr = new Uint8Array();
%ArrayBufferDetach(arr.buffer);

function foo() {
  return arr[Symbol.iterator]();
}

%PrepareFunctionForOptimization(foo);
print(foo, TypeError);
%OptimizeFunctionOnNextCall(foo);
print(foo, TypeError);
