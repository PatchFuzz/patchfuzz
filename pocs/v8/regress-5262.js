function g() { return 23 }
function h() { return 42 }
function boom(o) { o.g = h }
function f(osr_and_recurse) {
  if (osr_and_recurse) {
    for (var i = 0; i < 3; ++i) {
      if (i == 1) %OptimizeOsr();
    }
    %PrepareFunctionForOptimization(f);
    %OptimizeFunctionOnNextCall(f);
    f(false);     
    boom(this);   
    var x = g();  
    return x;
  }
  return 65;
}
%PrepareFunctionForOptimization(f);
print(65, f(false));
print(65, f(false));
print(42, f(true));
