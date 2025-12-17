;

var a = Array.of();
print(a.length, 0);

a = Array.of(undefined, null, 3.14, []);
print(a, [undefined, null, 3.14, []]);

a = [];
for (var i = 0; i < 1000; i++)
    a[i] = i;
print(Array.of.apply({}, a), a);
