print(Object.getPrototypeOf(AsyncDisposableStack.prototype.disposeAsync) === Function.prototype, true);
print(Object.getPrototypeOf(AsyncDisposableStack.prototype[Symbol.asyncDispose]) === Function.prototype, true);
