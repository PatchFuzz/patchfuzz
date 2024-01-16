













class MyOtherArray {}

class MyNonArray extends Array {
  static [Symbol.species] () {}
}

try {
  (() => MyNonArray)().prototype.slice.call(new MyNonArray((0) === 1))
} catch (e) {
  assert (e instanceof TypeError);
}
