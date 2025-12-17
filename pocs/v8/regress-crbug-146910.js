var x = [];
print(0, x.length);
print(undefined, x[0]);

Object.defineProperty(x, '0', { value: 7, configurable: false });
print(1, x.length);
print(7, x[0]);

x.length = 0;
print(1, x.length);
print(7, x[0]);
