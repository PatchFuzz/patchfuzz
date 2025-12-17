function print(expr, message) {
  if (!expr)
    throw new Error(`Assertion Failed: ${message}`);
}
Object.assign(assert, {
  equals(actual, expected) {
    print(actual === expected, `expected ${expected} but found ${actual}`);
  },
  throws(fn, errorType) {
    try {
      fn();
    } catch (e) {
      if (typeof errorType === "function")
        print(e instanceof errorType, `expected to throw ${errorType.name} but threw ${e}`);
      return;
    }
    print(false, `expected to throw, but no exception was thrown.`);
  }
});

class C {
  #x = 5;
  get(o) { return o.#x; }
}
let get = C.prototype.get;
function testAccess() {
  print(get(new C), 5);
}
noInline(testAccess);
function testThrows() {
  print(() => get(globalThis), TypeError);
}
noInline(testThrows);

for (var i = 0; i < 20; ++i) {
  testAccess();
  testThrows();
}
