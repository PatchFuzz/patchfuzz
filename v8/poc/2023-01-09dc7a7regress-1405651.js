





function assertMaglevved(f) {
  print(isMaglevved(f));
}

function f(x) {
  return x[2];
}

let buff = new ArrayBuffer(1024);
let arr = new Int32Array(buff);
arr[2] = 42;

%PrepareFunctionForOptimization(f);
print(42, f(arr));

%OptimizeMaglevOnNextCall(f);
print(42, f(arr));

assertMaglevved(f);

buff.transfer();
print(f);

print(undefined, f(arr));

let buff2 = new ArrayBuffer(1024);
let arr2 = new Int32Array(buff2);
arr2[2] = 42;



%ClearFunctionFeedback(f);
%PrepareFunctionForOptimization(f);
print(42, f(arr2));
%OptimizeMaglevOnNextCall(f);
print(42, f(arr2));
assertMaglevved(f);


buff2.transfer();
assertMaglevved(f);


print(undefined, f(arr2));
print(f);
