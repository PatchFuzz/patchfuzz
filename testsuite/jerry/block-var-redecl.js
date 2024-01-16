













function check_syntax_error (script)
{
  try
  {
    eval (script);
    assert (false);
  }
  catch (e)
  {
    assert (e instanceof SyntaxError);
  }
}

eval("function f(){}; var f;");
eval("var f; function f(){};");

eval("function f(){}; { var f; }")
eval("{ var f; } function f(){};")

eval("{ function f(){}; } var f;")
eval("var f; { function f(){}; }")

check_syntax_error ("{ function f(){}; var f; }");
check_syntax_error ("{ var f; function f(){}; }");

eval("{ { function f(){}; } var f; }")
eval("{ var f; { function f(){}; } }")

check_syntax_error ("{ function f(){}; { var f; } }")
check_syntax_error ("{ { var f; } function f(){}; }")

eval("{ { function f(){}; } { var f; } }")
eval("{ { var f; } { function f(){}; } }")

eval("function g(){ function f(){}; var f; }")
eval("function g(){ var f; function f(){}; }")

eval("function g(){ function f(){}; { var f; } }")
eval("function g(){ { var f; } function f(){}; }")

eval("function g(){ { function f(){}; } var f; }")
eval("function g(){ var f; { function f(){}; } }")
