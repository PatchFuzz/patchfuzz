class A {
    static #foo = 3;
    constructor() {
      print(A.prototype.#foo);
    }
}

print(() => new A(), TypeError);

class B {
  static #foo = 3;
  constructor() {
    B.prototype.#foo = 2;
  }
}

print(() => new B(), TypeError);
