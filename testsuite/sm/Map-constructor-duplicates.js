

var arg = [["zero", 7], ["one", 1], ["two", 4], ["zero", 8], ["two", 2], ["zero", 0]];
var m = new Map(arg);
assertEq(m.get("zero"), 0);
assertEq(m.get("one"), 1);
assertEq(m.get("two"), 2);
assertEq(m.size, 3);
