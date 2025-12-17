;

print(Array.prototype.toSource.call([1, 'hi']), '[1, "hi"]');
print(Array.prototype.toSource.call({1: 10, 0: 42, length: 2}), "[42, 10]");
print(Array.prototype.toSource.call({1: 10, 0: 42, length: 1}), "[42]");
print(() => Array.prototype.toSource.call("someString"), TypeError);
print(() => Array.prototype.toSource.call(42), TypeError);
print(() => Array.prototype.toSource.call(undefined), TypeError);
