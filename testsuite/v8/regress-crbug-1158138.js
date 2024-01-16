





let a = { foo: 4 };
Object.seal(a);
assertTrue(Object.getOwnPropertyDescriptor(a, 'foo').writable);
Object.defineProperty(a, 'foo', { writable: false });
assertFalse(Object.getOwnPropertyDescriptor(a, 'foo').writable);
