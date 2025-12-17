;

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

print(log, "e");
