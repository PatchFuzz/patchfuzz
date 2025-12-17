print((a => a).hasOwnProperty("length"), true);

print((a => a).length, 1);
print((() => 0).length, 0);
print(((a) => 0).length, 1);
print(((a, b) => 0).length, 2);

print(((...arr) => arr).length, 0);
print(((a=1, b=2) => 0).length, 0);
