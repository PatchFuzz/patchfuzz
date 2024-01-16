













class M {
  get foo() {
    return this._x;
  }
  set foo(x) {
    this._x = x;
  }
}

class T5 extends M {
  constructor() {
    (() => super.foo = 20)();
  }
}

try {
  new T5
  assert(false);
} catch (e) {
  assert(e instanceof ReferenceError);
}
