














function join(sep)
{
  sep = sep ? sep : ",";
  var result = "";

  for (var i = 0; i < this.length; ++i) {
    result += this[i];
    if (i + 1 < this.length) {
      result += sep;
    }
  }

  return result;
}


Array.prototype.join = 1;

assert ([1].toString() === "[object Array]");

Array.prototype.join = join;

assert ([1, 2].toString() === "1,2");

var test = [1,2,3];
test.join = function() { throw ReferenceError ("foo"); };

try {
  test.toString();

  assert (false);
} catch (e) {
  assert (e.message === "foo");
  assert (e instanceof ReferenceError);
}



var arr = [1,2]
Object.defineProperty(arr, 'join', { 'get' : function () {throw new ReferenceError ("foo"); } });
try {
  arr.toString();

  assert (false);
} catch (e) {
  assert (e.message === "foo");
  assert (e instanceof ReferenceError);
}
