;
;

var g = newGlobal();
g.eval(`var it = [1, 2][Symbol.iterator]();`);
print(g.it, 1);
print([][Symbol.iterator]().next.call(g.it), { value: 2, done: false })
