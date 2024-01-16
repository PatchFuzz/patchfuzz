

var s = new Set(["x", "y", "z", "z", "y"]);
assertEq(s.size, 3);
s.clear();
assertEq(s.size, 0);
assertEq(s.has("x"), false);
assertEq(s.delete("x"), false);
assertEq(s.has("z"), false);
for (var v of s)
    throw "FAIL";  

s.add("y");
assertEq(s.size, 1);
assertEq(s.has("x"), false);
assertEq(s.has("z"), false);
