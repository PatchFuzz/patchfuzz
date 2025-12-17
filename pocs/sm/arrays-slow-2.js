var a = [1, 2, 3];
a.slow = true;
var s = '';
for (var x of a)
    s += x;
for (var y of a)
    s += y;
print(s, '123123');
