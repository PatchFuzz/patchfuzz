var a = [1, 2, 3, 4, 5, 6, 7, 8];
var s = '';
for (var v of a) {
    s += v;
    a.shift();
}
print(s, '1357');
