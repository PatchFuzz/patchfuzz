

var a = [0, 1, 1, 0, 1, 0, 0];
var s = '';
for (var v of a) {
    s += v;
    if (v === 1)
        a.push(2);
}
assertEq(s, '0110100222');
