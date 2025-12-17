;

{
  print(typeof DisposableStack, "function");

  print(Object.getOwnPropertyDescriptor(DisposableStack, 'prototype'), {
    value: DisposableStack.prototype,
    writable: false,
    enumerable: false,
    configurable: false,
  });
}

{
  print(Object.getOwnPropertyDescriptor(DisposableStack.prototype, Symbol.toStringTag), {
    value: 'DisposableStack',
    writable: false,
    enumerable: false,
    configurable: true
  });
}

{
  print(typeof DisposableStack.prototype[Symbol.dispose], 'function');
  print(DisposableStack.prototype[Symbol.dispose], DisposableStack.prototype.dispose);
  print(Object.getOwnPropertyDescriptor(DisposableStack.prototype, Symbol.dispose), {
    value: DisposableStack.prototype[Symbol.dispose],
    writable: true,
    enumerable: false,
    configurable: true,
  });
}

{
  print(() => DisposableStack(), TypeError);
}

{
  const properties = ['dispose', 'adopt', 'defer', 'move', 'disposed', 'use', Symbol.dispose];
  for (const p of properties) {
    print(() => {
      DisposableStack.prototype[p].call({});
    }, TypeError);
  }
}
