load(libdir + "syntax.js");

var postfixes = [
  "yield) @",
  "yield} @",
  "yield] @",
];

function check_syntax_error(e, code) {
  
}

test_syntax(postfixes, check_syntax_error, true);
