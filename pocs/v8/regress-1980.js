var msg = "Method Error.prototype.toString called on incompatible receiver ";

var invalid_this = [ "invalid", 23, undefined, null ];
for (var i = 0; i < invalid_this.length; i++) {
  var exception = false;
  try {
    Error.prototype.toString.call(invalid_this[i]);
  } catch (e) {
    exception = true;
    print(msg + invalid_this[i], e.message);
  }
  print(exception);
}
