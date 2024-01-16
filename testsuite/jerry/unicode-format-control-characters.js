













function checkSyntax (str) {
  try {
    eval (str);
    assert (false);
  } catch (e) {
    assert (e instanceof SyntaxError);
  }
}



checkSyntax ("_\u200b\u200d");
checkSyntax ("_\u200c\u200e");

var _\u200c\u200d = 5;

assert (_\u200c\u200d === 5);
