function foo() {
  return function(c) {
    var double_var = [3.0, 3.5][0];
    var literal = c ? [1, double_var] : [double_var, 3.5];
    return literal[0];
  };
}

var f1 = foo();
var f2 = foo();
%PrepareFunctionForOptimization(f1);


f1(false);
f2(false);


%OptimizeFunctionOnNextCall(f1);
f1(false);



f2(true);


var l = f1(true);
print(1, l);
