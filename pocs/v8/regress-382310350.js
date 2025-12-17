function main(){
  var v0 = new Int32Array([2158557328]);
  return (v0[0] ** 2) - 4564247551369761000;
}

%PrepareFunctionForOptimization(main);
print(0, main());
%OptimizeFunctionOnNextCall(main);
print(0, main());
