

function check_syntax_error(code)
{
  try {
    eval(code);
    assert(false);
  } catch (e) {
    assert(e instanceof SyntaxError);
  }
}

check_syntax_error("import('a.mjs',4)");
check_syntax_error("(import('a.mjs',4))");
check_syntax_error("(import 'a.mjs')");
