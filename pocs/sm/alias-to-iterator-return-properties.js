;

{
  const IteratorPrototype = Object.getPrototypeOf(
    Object.getPrototypeOf([][Symbol.iterator]())
  );

  print(typeof IteratorPrototype[Symbol.dispose], 'function');
  print(Object.getOwnPropertyDescriptor(IteratorPrototype[Symbol.dispose], 'length'), {
    value: 0,
    writable: false,
    enumerable: false,
    configurable: true,
  });
  print(Object.getOwnPropertyDescriptor(IteratorPrototype[Symbol.dispose], 'name'), {
    value: '[Symbol.dispose]',
    writable: false,
    enumerable: false,
    configurable: true,
  });
  print(Object.getOwnPropertyDescriptor(IteratorPrototype, Symbol.dispose), {
    value: IteratorPrototype[Symbol.dispose],
    writable: true,
    enumerable: false,
    configurable: true,
  });
}
