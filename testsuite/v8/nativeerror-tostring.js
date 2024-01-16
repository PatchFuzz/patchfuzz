



[
  EvalError, RangeError, ReferenceError,
  SyntaxError, TypeError, URIError,
].forEach((NativeError) => {
  assertFalse(NativeError.prototype.hasOwnProperty('toString'));
  assertEquals(NativeError.prototype.toString, Error.prototype.toString);
});
