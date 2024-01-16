

function f() {
  try {
    a;
    assert (false);
  } catch (e) {
    assert (e instanceof ReferenceError);
  }

  eval ("assert (a === undefined); { function a() { return 5; } }");
  assert (a() === 5);

  
  delete a;

  try {
    a;
    assert (false);
  } catch (e) {
    assert (e instanceof ReferenceError);
  }
}
f();

function g() {
  let a = 1;

  eval ("assert (a === 1);"
        + "{ function a() { return 2; } assert (a() === 2) }"
        + "assert (a === 1);");

  assert (a === 1);
}
g();
