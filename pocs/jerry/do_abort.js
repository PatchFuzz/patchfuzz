function f() {
  return 32;
}

function g() {
  f();
}


while (true) {
  try {
    g();
  } catch (e) {
    var s = "Don't stop here";
  }
}
