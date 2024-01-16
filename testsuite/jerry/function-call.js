













function check_syntax_error (code)
{
  try {
    eval (code)
    assert (false)
  } catch (e) {
    assert (e instanceof SyntaxError)
  }
}

function f(...a)
{
  return a.length
}

check_syntax_error ("f(,)")
check_syntax_error ("f(,1)")
check_syntax_error ("f(1,,)")
check_syntax_error ("f(1,,2)")

assert(f(10) === 1)
assert(f(10,) === 1)
assert(f(10,11) === 2)
assert(f(10,11,) === 2)
