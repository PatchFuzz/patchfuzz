source = "var x;";
for (var i = 0; i < 11; i++) {
  source += "  let a_" + i + " = 0;\n";
}
source += "  (function () {\n"
for (var i = 0; i < 11; i++) {
  source += "a_" + i + "++;\n";
}
source += "})();\n"

eval(source);
print(undefined, x);
