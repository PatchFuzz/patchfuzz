
















load(libdir + "evalInFrame.js");

function f() {
  
  evalInFrame(1, "print(a)");
}

function g() {
  evalInFrame(1, "a = 43");
}

function testGet() {
  {
    let a = 42;
    (function () { f(); })();
  }
}

function testSet() {
  {
    let a = 42;
    (function () { g(); })();
  }
}

var log = "";

try {
  testGet();
} catch (e) {
  
  log += "g";
}

try {
  testSet();
} catch (e) {
  
  log += "s";
}

assertEq(log, "gs");
