


























var x = [];
assertSame(0, x.length);
assertSame(undefined, x[0]);

Object.defineProperty(x, '0', { value: 7, configurable: false });
assertSame(1, x.length);
assertSame(7, x[0]);

x.length = 0;
assertSame(1, x.length);
assertSame(7, x[0]);
