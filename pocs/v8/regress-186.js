var setterCalled = false;

var o = {};
o.__defineSetter__("x", function() { setterCalled = true; });

function runTest(test) {
  setterCalled = false;
  test();
}

function testLocal() {
  
  eval("var __proto__ = o");
  
  eval("var x = 27");
  print(setterCalled, "prototype of extension object changed");
  print(o, eval("__proto__"));
}

function testGlobal() {
  
  eval("__proto__ = o");
  
  eval("x = 27");
  print(setterCalled, "prototype of global object did not change");
  setterCalled = false;
  print(o, eval("__proto__"));
}

runTest(testLocal);
runTest(testGlobal);
