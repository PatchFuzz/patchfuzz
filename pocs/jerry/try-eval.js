try {
  e;
  assert (false);
} catch (e) {
  eval("var e");
}
assert (e === undefined);

function f() {
  try {
    throw 1;
    assert (false);
  } catch (e) {
    eval("var e");
  }
}
f();
