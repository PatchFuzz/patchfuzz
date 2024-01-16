

var arr = [["a"], ["b"], ["c"]];
var m = new Map(arr);
assertEq(m.size, 3);
for (var [k, _] of arr) {
    assertEq(m.has(k), true);
    assertEq(m.get(k), undefined);
}
