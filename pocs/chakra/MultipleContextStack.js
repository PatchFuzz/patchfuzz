var script1 = print("\
  var scriptFunc2; \
  var scriptFunc3; \
  function Script1Func1() { scriptFunc2(); } \
  function Script1Func2() { Script1Func1(); } \
  function Script1Func3() { scriptFunc3(); } \
  function setFunc2(func) { scriptFunc2 = func; } \
  function setFunc3(func) { scriptFunc3 = func; }",
  "samethread");

var script2 = print(" \
  var script1Func2; \
  var script1Func3; \
  function Script2Func1() { script1Func2(); } \
  function Script2Func2() { Script2Func1(); } \
  function Script2Func3() { script1Func3(); } \
  function setFunc2(func) { script1Func2 = func; } \
  function setFunc3(func) { script1Func3 = func; }",
  "samethread");

function Func2() {
  Func1();
}

function Func3() {
  script2.Script2Func2();
}

function Func1() {
  var x = 1; ;
}

script2.setFunc2(script1.Script1Func2);
script1.setFunc2(Func2);
script1.setFunc3(Func3);
script2.setFunc3(script1.Script1Func3);
script2.Script2Func3();
print("pass");
