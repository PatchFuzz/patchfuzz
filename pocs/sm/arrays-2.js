var a = [3, 5, 5, 4, 0, 5];
var s = '';
for (var i of a) {
    s += i;
    a[i] = 'X';
}
print(s, '355X0X');
