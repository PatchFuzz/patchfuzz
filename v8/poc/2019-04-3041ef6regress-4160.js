





(function(x) {
  (function(x) {
    var boom = (() => eval(x));
    %PrepareFunctionForOptimization(boom);
    print(23, boom());
    print(23, boom());
    %OptimizeFunctionOnNextCall(boom);
    print(23, boom());
    print("23", x);
  })("23");
  print("42", x);
})("42");

(function(x) {
  (function(x) {
    var boom = (() => (eval("var x = 66"), x));
    %PrepareFunctionForOptimization(boom);
    print(66, boom());
    print(66, boom());
    %OptimizeFunctionOnNextCall(boom);
    print(66, boom());
    print("23", x);
  })("23");
  print("42", x);
})("42");
