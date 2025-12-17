let byte_view = new Uint8Array(8);
for(let i = 0; i < 8; ++i) byte_view[i] = i;

function bar() {
  return [undefined, byte_view[6]];
}

function foo() {
  return bar()[1];
}

%PrepareFunctionForOptimization(foo);
print(6, foo());
%OptimizeFunctionOnNextCall(foo);
print(6, foo());
