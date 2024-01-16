

function check_reference_error (code)
{
  try {
    eval (code);
    assert (false);
  } catch (e) {
    assert (e instanceof ReferenceError);
  }
}

check_reference_error ("let b = a, a;");
check_reference_error ("const b = b;");
check_reference_error ("a; let b, a;");
check_reference_error ("a = 1; let b, a;");

function f() {
  return x + y.a;
}

check_reference_error ("x");
check_reference_error ("y");
check_reference_error ("x = 1");
check_reference_error ("y = 1");

let x = 6;
assert (x === 6);
let y = { a: 7 };
assert (y.a === 7);

assert (f() === 13);
