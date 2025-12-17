var N = 1 << 16;
var m = new Map;
for (var i = 0; i < N; i++)
    print(m.set(i, i), m);
for (var i = 0; i < N; i++)
    print(m.get(i), i);
