





try {
  var f = eval("(function(){0 = y + y})");
  %OptimizeFunctionOnNextCall(f);
  f();
  assertUnreachable();
} catch(e) {
  assertTrue(e instanceof SyntaxError);
}
