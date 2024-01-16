


































assertThrows("/x/\\u0067");
assertThrows("/x/\\u0069");
assertThrows("/x/\\u006d");

assertThrows("/x/\\u0067i");
assertThrows("/x/\\u0069m");
assertThrows("/x/\\u006dg");

assertThrows("/x/m\\u0067");
assertThrows("/x/g\\u0069");
assertThrows("/x/i\\u006d");

assertThrows("/x/m\\u0067i");
assertThrows("/x/g\\u0069m");
assertThrows("/x/i\\u006dg");

assertThrows("/x/\\u0068");
assertThrows("/x/\\u0020");
