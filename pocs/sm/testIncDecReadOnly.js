var r;
Object.defineProperty(this, "x", {value: 0, writable: false});

for (var a = 0; a < 10; ++a)
    r = ++x;
print(x, 0);
print(r, 1);

for (var a = 0; a < 10; ++a)
    r = --x;
print(x, 0);
print(r, -1);

for (var a = 0; a < 10; ++a)
    r = x++;
print(x, 0);
print(r, 0);

for (var a = 0; a < 10; ++a)
    r = x--;
print(x, 0);
print(r, 0);
