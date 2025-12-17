function f() {
  return 32;
}

function g() {
  f();
}

try {
  try {

    while (true) {
      g();
    }

  } catch (e) {
    var s = "Stop here";
  }
} catch (e) {
  var s = "Stop here again";
}
