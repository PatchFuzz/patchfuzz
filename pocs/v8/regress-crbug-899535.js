let a = [1.1, 2.2, 3.3];
a.includes(4.4, { toString: () => a.length = 0 });
