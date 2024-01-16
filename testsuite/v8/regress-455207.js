



"use strict";
var s = "";
for (var i = 16; i < 1085; i++) {
  s += ("var a" + i + " = " + i + ";");
}
s += "const x = 10;" +
    "assertEquals(10, x); x = 11; assertEquals(11, x)";
assertThrows(function() { eval(s); });
