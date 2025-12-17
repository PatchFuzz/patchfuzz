let a = {0: 5, 1: 4, 2: 3, length: 2};
Object.freeze(a);

print(() => Array.prototype.sort.call(a));
print({0: 5, 1: 4, 2: 3, length: 2}, a);
