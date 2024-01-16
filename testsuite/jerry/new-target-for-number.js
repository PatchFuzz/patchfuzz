













try {
  Reflect.construct (Number);
  assert (false);
} catch (e) {
  assert (e instanceof TypeError);
}

try {
  Reflect.construct (Number, 1);
  assert (false);
} catch (e) {
  assert (e instanceof TypeError);
}

class MyNumber extends Number {};
var n1= new MyNumber();

assert(Object.getPrototypeOf(n1) == MyNumber.prototype)
