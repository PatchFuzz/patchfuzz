





function f() {
  var s = "äϠ�𝌆";
  var i = s[Symbol.iterator]();
  assertEquals("ä", i.next().value);
  assertEquals("Ϡ", i.next().value);
  assertEquals("�", i.next().value);
  assertEquals("𝌆", i.next().value);
  assertSame(undefined, i.next().value);
};
%PrepareFunctionForOptimization(f);
f();
f();
%OptimizeFunctionOnNextCall(f);
f();
