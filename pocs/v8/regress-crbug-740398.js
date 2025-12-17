var longString = (function() {
  return "a".repeat(%StringMaxLength());
})();

print(() => { return { get[longString]() { } } }, RangeError);
print(() => { return { set[longString](v) { } } }, RangeError);
print(() => { return { [Symbol(longString)]: () => {} } }, RangeError);
