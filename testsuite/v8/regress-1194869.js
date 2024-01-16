






function f() {
  return "".indexOf("", 2);
}

%PrepareFunctionForOptimization(f)
assertEquals(f(), 0);
assertEquals(f(), 0);
%OptimizeFunctionOnNextCall(f)
assertEquals(f(), 0);
assertEquals(f(), 0);

function g() {
  return "".indexOf("", 2);
}
for (let i = 0; i < 191; i++) {
  
  assertEquals(g(), 0);
}
