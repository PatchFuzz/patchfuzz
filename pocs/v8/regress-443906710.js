let obj = {
  y: 19.5
};

let undef = [undefined];
function foo(max) {
  let val = undef[0];
  for (let i = 0; i < max; i += 1) {
    i += val;
    val = 40;
  }
  obj.y = val;
}

%PrepareFunctionForOptimization(foo);
foo(1);
%OptimizeMaglevOnNextCall(foo);
foo(0);
print(undefined, obj.y);
