let assert = Object.assign(
  function assert(expr, message = "") {
    if (expr == false)
      throw new Error(`Expected ${message || "expr"} to be true, but was ${expr}`);
  }, {
  false(expr, message = "") {
    if (expr == true)
      throw new Error(`Expected ${message || "expr"} to be false, but was ${expr}`)
  },
  equals(a, b) {
    if (a === b || (a === a && b === b) || (a !== a && b !== b))
      return;

    throw new Error(`Expected ${a} to be ${b}`);
  }
});



let Base = eval(`(class Base {
  
  constructor() {
    
    ${Array(200).map((_, i) => `  this.x${i} = ${i};\n`).join("")}
  }
})`);

class PrivateFieldAfterPreventExtensions extends Base {
  #i = (Object.preventExtensions(this), 42);
  #assert = (assert.false(Object.isExtensible(this), "Object.isExtensible(this)"), this.#i + 1);

  get() { return this.#i; }
  set(i) { this.#i = i; }
}

function test(i) {
  let c = new PrivateFieldAfterPreventExtensions;
  assert.equals(c.x150 === 150);
  c.x150 = 0.1;
  assert.equals(c.get(), 42);
  c.set(i);
  assert.equals(c.get(), i);
}
noInline(test);

test(0);
test(1);
test(2);
for (var i = 0; i < 200; ++i)
  test(i);
