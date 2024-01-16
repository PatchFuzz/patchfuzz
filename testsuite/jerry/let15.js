













{
  try {
    f()
    assert(false)
  } catch (e) {
    assert(e instanceof ReferenceError)
  }

  let a = 1;

  try {
    f()
    assert(false)
  } catch (e) {
    assert(e instanceof ReferenceError)
  }

  let [b] = [2];

  try {
    f()
    assert(false)
  } catch (e) {
    assert(e instanceof ReferenceError)
  }

  const {c} = { c:3 };

  f();
  function f() { assert(a + b + c === 6) }
}

{
  let a = 3;
  let [b] = [4];
  const {c} = { c:5 };

  let f = (function () { assert(a + b + c === 12) })
  f();

  {
    function g() { assert(a + b + c === 12) }
    g();
  }
}

{
  class C {}

  assert(function () { return C } () === C);
}
