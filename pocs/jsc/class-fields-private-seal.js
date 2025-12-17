let assert = Object.assign(
  function print(expr, message = "") {
    if (expr == false)
      throw new Error(`Expected ${message || "expr"} to be true, but was ${expr}`);
  }, {
  equals(a, b) {
    if (a === b || (a === a && b === b) || (a !== a && b !== b))
      return;

    throw new Error(`Expected ${a} to be ${b}`);
  }
});

class Base {
  constructor() {
    this.x = 1;
  }
}

class PrivateFieldAfterPreventExtensions extends Base {
  #i = (Object.seal(this), 42);
  #assert = (print(Object.isSealed(this), "Object.isSealed(this)"), this.#i + 1);

  get() { return this.#i; }
  set(i) { this.#i = i; }
}

function test(i) {
  let c = new PrivateFieldAfterPreventExtensions;
  c.x = 0.1;
  print(c.get(), 42);
  c.set(i);
  print(c.get(), i);
}
noInline(test);

test(0);
test(1);
test(2);
for (var i = 0; i < 200; ++i)
  test(i);
