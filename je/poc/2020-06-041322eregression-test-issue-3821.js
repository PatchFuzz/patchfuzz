













function check_syntax_error (script)
{
  try
  {
    eval (script);
    print(false);
  }
  catch (e)
  {
    print(e instanceof SyntaxError);
  }
}

check_syntax_error ('function')
check_syntax_error ('function a')
check_syntax_error ('function a"')
check_syntax_error ('function a"b')
check_syntax_error ('function a("b')
check_syntax_error ('function a(b, "c')
check_syntax_error ('function a(b, c"d')
check_syntax_error ('function a(b, c)"d')
