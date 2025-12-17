try {
  var f = eval("(function(){0 = y + y})");
  %OptimizeFunctionOnNextCall(f);
  f();
  print();
} catch(e) {
  print(e instanceof SyntaxError);
}
