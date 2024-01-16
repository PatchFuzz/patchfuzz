





function g() {
  var f;
  class C extends eval("f = () => delete C; Array") {}
  f();
}

%PrepareFunctionForOptimization(g);
assertThrows(g, SyntaxError);
%OptimizeFunctionOnNextCall(g);
assertThrows(g, SyntaxError);
