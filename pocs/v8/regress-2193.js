function bozo() {};
function MakeClosure() {
  return function f(use_literals) {
    if (use_literals) {
      return [1,2,3,3,4,5,6,7,8,9,bozo];
    } else {
      return 0;
    }
  }
}


var closure1 = MakeClosure();
%PrepareFunctionForOptimization(closure1);
var closure2 = MakeClosure();
%PrepareFunctionForOptimization(closure2);
var expected = [1,2,3,3,4,5,6,7,8,9,bozo];




%PrepareFunctionForOptimization(closure1);
print(0, closure1(false));
print(expected, closure1(true));
%OptimizeFunctionOnNextCall(closure1);
print(expected, closure1(true));



%PrepareFunctionForOptimization(closure2);
print(0, closure2(false));
%OptimizeFunctionOnNextCall(closure2);
print(expected, closure2(true));
