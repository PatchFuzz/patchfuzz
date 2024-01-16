













function check_parse_error (txt) {
  try {
    eval (txt)
    assert (false)
  } catch (e) {
    assert (e instanceof SyntaxError)
  }
}

function f_args (a,b,c) {
  return arguments;
}

check_parse_error ("f_args (1 2 3)");
check_parse_error ("f_args (1; 2; 3)");
check_parse_error ("f_args (())");
check_parse_error ("f_args (1, 2, 3");
check_parse_error ("f_args 1, 2, 3)");
check_parse_error ("f_args 1, 2, 3");
check_parse_error ("f_args 1; 2; 3");
check_parse_error ("f_args{1, 2, 3}");
