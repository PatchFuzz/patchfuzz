var nonArray = { length: 4, 0: 42, 2: 37, 0xf7da5000: undefined, 4: 0 };
Array.prototype.sort.call(nonArray);
