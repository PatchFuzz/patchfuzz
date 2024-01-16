













try {
  Reflect.construct (Boolean, true);
  assert (false);
} catch (e) {
  assert (e instanceof TypeError);
}

try {
  Reflect.construct (Boolean, false);
  assert (false);
} catch (e) {
  assert (e instanceof TypeError);
}

class MyBoolean extends Boolean {};
var b1= new MyBoolean();
assert(Object.getPrototypeOf(b1) == MyBoolean.prototype)
