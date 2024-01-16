













class A {
  constructor() {
    var hasProp = $ => {}
    Object.preventExtensions(hasProp);
    assert(Object.isSealed(hasProp) === false);
  }
  super() {
    $: $
  }
}
class B extends A {
  constructor() {
    super() (super.super)
  }
}

try {
  new B;
  assert(false);
} catch (e) {
  assert(e instanceof TypeError);
}
