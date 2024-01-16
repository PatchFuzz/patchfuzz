

var a = [1, 2, 3];
var s = '';
for (var x of a)
    s += x;
for (var y of a)
    s += y;
assertEq(s, '123123');
