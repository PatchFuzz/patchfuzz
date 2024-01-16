













function f() { return 4 }

exit: {
  assert(f() === 6);
  break exit;
  function f() { return 6; }
}
assert(f() === 4);

{
  assert(f() === 6);
  f = 1;
  assert(f === 1);
  function f() { return 6; }
  f = 2;
  assert(f === 2);
}
assert(f === 1);

function g() { return 3 }
exit: {
  assert(g() === 5);
  function g() { return 4; }
  break exit;
  function g() { return 5; }
}
assert(g() === 5);

function h() {
  try {
    x;
    assert(false);
  } catch (e) {
    assert(e instanceof ReferenceError);
  }

  eval("exit: { assert(x() === 8); x = 4; break exit; function x() { return 8; } }");
  assert(x === undefined);
}
h();
