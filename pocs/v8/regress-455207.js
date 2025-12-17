"use strict";
var s = "";
for (var i = 16; i < 1085; i++) {
  s += ("var a" + i + " = " + i + ";");
}
s += "const x = 10;" +
    "print(10, x); x = 11; print(11, x)";
print(function() { eval(s); });
