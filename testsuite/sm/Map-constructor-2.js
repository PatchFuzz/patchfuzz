

var arr = [["zero", 0], ["one", 1], ["two", 2]];
var m = new Map(arr);
for (var [k, v] of arr)
    assertEq(m.get(k), v);
