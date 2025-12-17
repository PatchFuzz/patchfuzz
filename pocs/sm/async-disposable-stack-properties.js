;

{
  print(typeof AsyncDisposableStack, "function");

  print(Object.getOwnPropertyDescriptor(AsyncDisposableStack, 'prototype'), {
    value: AsyncDisposableStack.prototype,
    writable: false,
    enumerable: false,
    configurable: false,
  });
}

{
  print(Object.getOwnPropertyDescriptor(AsyncDisposableStack.prototype, Symbol.toStringTag), {
    value: 'AsyncDisposableStack',
    writable: false,
    enumerable: false,
    configurable: true
  });
}

{
  print(typeof AsyncDisposableStack.prototype[Symbol.asyncDispose], 'function');
  print(AsyncDisposableStack.prototype[Symbol.asyncDispose], AsyncDisposableStack.prototype.disposeAsync);
  print(Object.getOwnPropertyDescriptor(AsyncDisposableStack.prototype, Symbol.asyncDispose), {
    value: AsyncDisposableStack.prototype[Symbol.asyncDispose],
    writable: true,
    enumerable: false,
    configurable: true,
  });
}

{
  print(() => AsyncDisposableStack(), TypeError);
}

{
  const properties = ['adopt', 'defer', 'move', 'disposed', 'use'];
  for (const p of properties) {
    print(() => {
      AsyncDisposableStack.prototype[p].call({});
    }, TypeError);
  }

  const asyncProperties = ['disposeAsync', Symbol.asyncDispose];
  for (const p of asyncProperties) {
    print(async () => {
      await AsyncDisposableStack.prototype[p].call({});
    }, TypeError);
  }
}
