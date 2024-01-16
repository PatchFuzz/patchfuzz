





var longString = (function() {
  return "a".repeat(%StringMaxLength());
})();

assertThrows(() => { return { get[longString]() { } } }, RangeError);
assertThrows(() => { return { set[longString](v) { } } }, RangeError);
assertThrows(() => { return { [Symbol(longString)]: () => {} } }, RangeError);
