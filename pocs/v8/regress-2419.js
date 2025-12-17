var a = [5, 4, 3, 2, 1, 0];
Object.freeze(a);
print(function() { a.sort(); });
print([5, 4, 3, 2, 1, 0], a);

var b = {0: 5, 1: 4, 2: 3, 3: 2, 4: 1, 5: 0, length: 6};
Object.freeze(b);
print(function() { Array.prototype.sort.call(b); });
print({0: 5, 1: 4, 2: 3, 3: 2, 4: 1, 5: 0, length: 6}, b);
