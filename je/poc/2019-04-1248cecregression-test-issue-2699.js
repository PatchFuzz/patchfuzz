













function f(a) {
  function a() {
    return 5;
  }

  print(typeof a === "function");
  print(a () === 5);
  print(arguments[0] () === 5);
}

f (6);
