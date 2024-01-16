

var set = new Set(['a']);
var n = 5;
for (let v of set) {
    assertEq(v, 'a');
    if (n === 0)
        break;
    set.delete('a');
    set.add('a');
    n--;
}
assertEq(n, 0);
