function* range(n) {
    for (var i = 0; i < n; i++)
        yield i;
}

var s = '';
for (var a of range(4))
    s += a;
print(s, '0123');
