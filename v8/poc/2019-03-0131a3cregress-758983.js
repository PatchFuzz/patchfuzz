





var holey = [ 2.2,,"x" ];

function f(b) {
  holey[0] = 1.1;
  var r = holey[0];
  r = b ? r : 0;
  return r < 0;
}

%PrepareFunctionForOptimization(f);
f(true);
f(true);
%OptimizeFunctionOnNextCall(f);
print(f(true));
