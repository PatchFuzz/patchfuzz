function print(x) { print(x+''); }

Object.defineProperty(this, 'x', { configurable: true, get: function () { return undefined; } });

let x = 'let x';

Object.defineProperty(this, 'x', { value: 10 });

var desc = Object.getOwnPropertyDescriptor(this, 'x');

print(x);

for (var p in desc)
{
    print(p + ": " + desc[p]);
}

