Object.prototype.__defineGetter__(0, function() { throw 42; });
var exception = false;
try {
  Object[0]();
} catch(e) {
  exception = true;
  print(42, e);
}
print(exception);
