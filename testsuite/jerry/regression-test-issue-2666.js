













class C {
  static D () {
    return 5;
  }
}

class D extends C {}

assert (D.D () === 5);
