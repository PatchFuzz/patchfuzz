let x = 'let x';

print(x);
print(this.x);

this.x = 'global x';

print(x);
print(this.x);

const y = 'const y';

print(y);
print(this.y);

Object.defineProperty(this, 'y', { configurable: true, get: function () { return 'getter'; } });

print(y);
print(this.y);
