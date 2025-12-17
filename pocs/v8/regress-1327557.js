var x = { valueOf: function() { throw "x"; } };
var y = { valueOf: function() { throw "y"; } };

var exception = false;
try {
  x * -y;
} catch (e) {
  exception = true;
  print("y", e);
}
print(exception);
