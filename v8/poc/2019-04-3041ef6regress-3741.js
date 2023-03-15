




'use strict';
function f24(deopt) {
  let x = 1;
  {
    let x = 2;
    {
      let x = 3;
      print(3, x);
    }
    deopt + 1;
    print(2, x);
  }
  print(1, x);
}


%PrepareFunctionForOptimization(f24);
for (var j = 0; j < 10; ++j) {
  f24(12);
}
%OptimizeFunctionOnNextCall(f24);
f24({});
