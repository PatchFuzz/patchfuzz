













function check_syntax_error (code)
{
  try {
    eval (code)
    assert (false)
  } catch (e) {
    assert (e instanceof SyntaxError)
  }
}

eval("function f(a, b = 4) { }")
check_syntax_error ("function f(a, b = 4) { 'use strict' }")

eval('function f(...a) { }')
check_syntax_error ('function f(...a) { "use strict" }')

eval("({ f([a,b]) { } })")
check_syntax_error ("({ f([a,b]) { 'use strict' } })")

eval("function f(a, b = 4) { 'directive1'\n'directive2'\n }")
check_syntax_error ("function f(a, b = 4) { 'directive1'\n'directive2'\n'use strict' }")
