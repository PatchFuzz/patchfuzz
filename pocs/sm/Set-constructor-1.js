;

var s = new Set();
print(s.size, 0);
s = new Set(undefined);
print(s.size, 0);
s = new Set(null);
print(s.size, 0);

print(() => Set(), TypeError);
print(() => Set(undefined), TypeError);
print(() => Set(null), TypeError);
