































var r1 = "";
for (var i = 0; i < 1000; i++) {
  r1 += "a?";
}
"test".match(RegExp(r1));

var r2 = "";
for (var i = 0; i < 100; i++) {
  r2 += "(a?|b?|c?|d?|e?|f?|g?)";
}
"test".match(RegExp(r2));





var r3 = "a";
for (var i = 0; i < 1000; i++) {
  r3 = "(" + r3 + ")a";
}
"test".match(RegExp(r3));
