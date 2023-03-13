













function checkSyntax (str) {
  try {
    eval (str);
    print(false);
  } catch (e) {
    print(e instanceof SyntaxError);
  }
}



checkSyntax ("_\u200b\u200d");
checkSyntax ("_\u200c\u200e");

var _\u200c\u200d = 5;

print(_\u200c\u200d === 5);
