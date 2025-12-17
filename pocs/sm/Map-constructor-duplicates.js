var arg = [["zero", 7], ["one", 1], ["two", 4], ["zero", 8], ["two", 2], ["zero", 0]];
var m = new Map(arg);
print(m.get("zero"), 0);
print(m.get("one"), 1);
print(m.get("two"), 2);
print(m.size, 3);
