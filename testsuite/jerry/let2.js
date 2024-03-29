

function check_syntax_error (code)
{
  try {
    eval (code);
    assert (false);
  } catch (e) {
    assert (e instanceof SyntaxError);
  }
}

check_syntax_error ("let a; let b; let a");
check_syntax_error ("let a, b, a");
check_syntax_error ("var a; let a;");
check_syntax_error ("var a; const a = 3;");
check_syntax_error ("let a; var a;");
check_syntax_error ("const a = 3; var x, y, a;");
check_syntax_error ("const a");
check_syntax_error ("{ const a }");
check_syntax_error ("const a, b");
check_syntax_error ("let a; { let b; { var a; } }");
check_syntax_error ("{ { var a = 4; } }; let a = 3");
check_syntax_error ("function a() {}; let a;");
check_syntax_error ("let a; function a() {};");
check_syntax_error ("{ { function a() {}; let a; } }");
check_syntax_error ("{ { let a; function a() {}; } }");
check_syntax_error ("let a = 1; const b = 5; const a = 2;");
check_syntax_error ("try {} catch (e) { let e; }");
check_syntax_error ("try {} catch (e) { const e = 1; }");
check_syntax_error ("let A; class A {}");
check_syntax_error ("const A; class A {}");
check_syntax_error ("class A {}; let A");
check_syntax_error ("class A {}; const A = 1");
