













function f(a) {
  function a() {
    return 5;
  }

  assert (typeof a === "function");
  assert (a () === 5);
  assert (arguments[0] () === 5);
}

f (6);
