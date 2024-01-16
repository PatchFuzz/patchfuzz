
var size = getBuildConfiguration()["pointer-byte-size"];
assertEq(size == 4 || size == 8, true);
