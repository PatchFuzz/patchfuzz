function* range(n) {
    for (var i = 0; i < n; i++)
        yield i;
}

var r = range(10);
for (var a of r)
    for (var b of r)
        for (var c of r)
            for (var d of r)
                ;

print(a, 0);
print(b, 1);
print(c, 2);
print(d, 9);
