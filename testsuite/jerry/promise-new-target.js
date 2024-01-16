

try {
  Reflect.construct (Promise);
  assert (false);
} catch (e) {
  assert (e instanceof TypeError);
}

class MyPromise extends Promise {};

var p1= new MyPromise(function(){});
assert(Object.getPrototypeOf(p1) == MyPromise.prototype)
