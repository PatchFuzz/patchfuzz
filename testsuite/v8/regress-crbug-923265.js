



let a = {0: 5, 1: 4, 2: 3, length: 2};
Object.freeze(a);

assertThrows(() => Array.prototype.sort.call(a));
assertPropertiesEqual({0: 5, 1: 4, 2: 3, length: 2}, a);
