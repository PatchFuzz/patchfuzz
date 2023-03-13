













function f() {
  try {
    a;
    print(false);
  } catch (e) {
    print(e instanceof ReferenceError);
  }

  var o = { a:1 };

  with (o)
  {
    eval("var a = 2")
  }

  print(o.a === 2);
  print(a === undefined);
}
f();

function g() {
  try {
    a;
    print(false);
  } catch (e) {
    print(e instanceof ReferenceError);
  }

  var o = { a:1 };

  with (o)
  {
    eval("function a() { return 8; }")
  }

  print(o.a === 1);
  print(a() === 8);
}
g();
