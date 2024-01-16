


























var a = [5, 4, 3, 2, 1, 0];
Object.freeze(a);
assertThrows(function() { a.sort(); });
assertArrayEquals([5, 4, 3, 2, 1, 0], a);

var b = {0: 5, 1: 4, 2: 3, 3: 2, 4: 1, 5: 0, length: 6};
Object.freeze(b);
assertThrows(function() { Array.prototype.sort.call(b); });
assertPropertiesEqual({0: 5, 1: 4, 2: 3, 3: 2, 4: 1, 5: 0, length: 6}, b);
