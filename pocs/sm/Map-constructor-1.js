;

var m = new Map();
print(m.size, 0);
m = new Map(undefined);
print(m.size, 0);
m = new Map(null);
print(m.size, 0);

print(() => Map(), TypeError);
print(() => Map(undefined), TypeError);
print(() => Map(null), TypeError);
