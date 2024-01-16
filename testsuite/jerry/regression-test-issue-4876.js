













class M {
  constructor() {
    this._x = 45;
  }

  get foo() {
    return this._x;
  }
}

class N extends M {
  constructor(x = () => super.foo) {
    super();
    assert(x() === 45);
  }

  x(x = () => super.foo) {
    return x();
  }
}

assert(new N().x() === 45);
