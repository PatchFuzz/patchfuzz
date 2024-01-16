






source = "(function() {\n"
for (var i = 0; i < 65000; i++) {
  source += "  var a_" + i + " = 0;\n";
}
source += "  return function() {\n"
for (var i = 0; i < 65000; i++) {
  source += "a_" + i + "++;\n";
}
source += "}})();\n"

eval(source);
