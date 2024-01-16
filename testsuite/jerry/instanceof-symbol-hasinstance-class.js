

class NoParent {
  static [Symbol.hasInstance] (arg) {
    return false;
  }
}

var obj = new NoParent ();

assert ((obj instanceof NoParent) === false);

class PositiveNumber {
  static [Symbol.hasInstance] (arg) {
    return (arg instanceof Number) && (arg >= 0);
  }
}

var num_a = new Number (33);
var num_b = new Number (-50);

assert ((num_a instanceof PositiveNumber) === true);
assert ((num_b instanceof PositiveNumber) === false);


class ErrorAlways {
  static [Symbol.hasInstance] (arg) {
    throw new URIError("ErrorAlways");
  }
}

try {
  (new Object ()) instanceof ErrorAlways;
  assert (false);
} catch (ex) {
  assert (ex instanceof URIError);
}
