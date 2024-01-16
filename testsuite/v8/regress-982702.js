



class A {
    static #foo = 3;
    constructor() {
      print(A.prototype.#foo);
    }
}

assertThrows(() => new A(), TypeError);

class B {
  static #foo = 3;
  constructor() {
    B.prototype.#foo = 2;
  }
}

assertThrows(() => new B(), TypeError);
