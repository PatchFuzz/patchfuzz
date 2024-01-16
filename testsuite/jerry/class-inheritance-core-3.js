

class A extends Array {
  constructor (a, b, c) {
    super (a, b);
    this.f = 5;
  }
}

class B extends A { }

var b = new B (1, 2, 3, 4);
assert (b.f === 5);
assert (b.length === 2);
