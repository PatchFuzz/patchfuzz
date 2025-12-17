;

var postfixes = [
  "/bar/g; @",
  "\n/bar/g; @",
];

function check_syntax_error(e, code) {
  print(e instanceof SyntaxError, true);
}

test_syntax(postfixes, check_syntax_error, true);
