













function test_parse_error (txt) {
  try {
    eval (txt)
    assert (false)
  } catch (e){
    assert (e instanceof SyntaxError)
  }
}

var if1=
"if (false)() print ('t')" +
"else print ('f')"
test_parse_error (if1)

test_parse_error ("if (true)() { print ('t') }")
test_parse_error ("if {} (true) print ('t')")
test_parse_error ("if (true false) print ('t')")
test_parse_error ("if (true && || false) print ('t')")
test_parse_error ("if (&& true) print ('t')")
test_parse_error ("if (true ||) print ('t')")
test_parse_error ("if (true && {false || true}) print ('t')")

var elseif1 =
"if (false) print ('if statement') " +
"elseif (false) print ('else if statement') " +
"else print ('else statement') "
test_parse_error (elseif1);

var elseif2 =
"if (false) print ('if statement') " +
"elif (false) print ('else if statement') " +
"else print ('else statement') "
test_parse_error (elseif2)

var elseif3 =
"if (false) print ('if statement') " +
"else (false) print ('else if statement') " +
"else print ('else statement') "
test_parse_error (elseif3)
