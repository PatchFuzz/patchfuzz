

function checkSyntaxError (str) {
  try {
    eval (str);
    assert (false);
  } catch (e) {
    assert (e instanceof SyntaxError);
  }
}

checkSyntaxError ("0p");
checkSyntaxError ("0o");
checkSyntaxError ("0o0123456789");
checkSyntaxError ("0o9");

checkSyntaxError ("0p");
checkSyntaxError ("0O");
checkSyntaxError ("0O9");


checkSyntaxError ("'use strict'; 0777");
assert (eval ("'use strict'; 0o777") === 511);

assert (0o123 === 83);
assert (0o77777777 === 16777215);
assert (0o767 === parseInt ("767", 8));
assert (0767 === 0o767);

assert (0O123 === 83);
assert (0O77777777 === 16777215);
assert (0O767 === parseInt ("767", 8));
assert (0767 === 0O767);
