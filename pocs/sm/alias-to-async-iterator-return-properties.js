;

async function* generator() {}
const AsyncIteratorPrototype = Object.getPrototypeOf(Object.getPrototypeOf(generator.prototype));

print(typeof AsyncIteratorPrototype[Symbol.asyncDispose], 'function');
print(Object.getOwnPropertyDescriptor(AsyncIteratorPrototype[Symbol.asyncDispose], 'length'), {
  value: 0,
  writable: false,
  enumerable: false,
  configurable: true,
});
print(Object.getOwnPropertyDescriptor(AsyncIteratorPrototype[Symbol.asyncDispose], 'name'), {
  value: '[Symbol.asyncDispose]',
  writable: false,
  enumerable: false,
  configurable: true,
});
print(Object.getOwnPropertyDescriptor(AsyncIteratorPrototype, Symbol.asyncDispose), {
  value: AsyncIteratorPrototype[Symbol.asyncDispose],
  writable: true,
  enumerable: false,
  configurable: true,
});
print(AsyncIteratorPrototype[Symbol.asyncDispose]() instanceof Promise, true);
