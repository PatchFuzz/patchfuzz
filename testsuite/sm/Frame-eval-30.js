

load(libdir + "evalInFrame.js");

let x;

function f() {
  evalInFrame(1, "var x;");
}

var log = "";

try {
  f();
} catch (e) {
  log += "e";
}

assertEq(log, "e");
