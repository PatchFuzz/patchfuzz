function g() {
  var f;
  class C extends eval("f = () => delete C; Array") {}
  f();
}

%PrepareFunctionForOptimization(g);
print(g, SyntaxError);
%OptimizeFunctionOnNextCall(g);
print(g, SyntaxError);
