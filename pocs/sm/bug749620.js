var v = [0, 0x7fffffff];
v.sort();

print(v[0], 0);
print(v[1], 0x7fffffff);

v = [0x7fffffff, 0];
v.sort();

print(v[0], 0);
print(v[1], 0x7fffffff);
