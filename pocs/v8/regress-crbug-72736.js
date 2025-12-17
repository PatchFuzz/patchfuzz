var obj = {};
Object.defineProperty(obj, 'foo', { value: 10, configurable: true });
print(obj.foo, 10);
Object.defineProperty(obj, 'foo', { value: 20, configurable: true });
print(obj.foo, 20);
