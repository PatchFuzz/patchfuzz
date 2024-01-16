













function f() {
  try {
    a;
    assert (false);
  } catch (e) {
    assert (e instanceof ReferenceError);
  }

  var o = { a:1 };

  with (o)
  {
    eval("var a = 2")
  }

  assert (o.a === 2);
  assert (a === undefined);
}
f();

function g() {
  try {
    a;
    assert (false);
  } catch (e) {
    assert (e instanceof ReferenceError);
  }

  var o = { a:1 };

  with (o)
  {
    eval("function a() { return 8; }")
  }

  assert (o.a === 1);
  assert (a() === 8);
}
g();
