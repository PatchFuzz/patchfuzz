let a = { foo: 4 };
Object.seal(a);
print(Object.getOwnPropertyDescriptor(a, 'foo').writable);
Object.defineProperty(a, 'foo', { writable: false });
print(Object.getOwnPropertyDescriptor(a, 'foo').writable);
