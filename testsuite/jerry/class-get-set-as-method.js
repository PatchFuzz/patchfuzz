














class A {
  
  get     (a, b, c) {
    return a + b + c;
  }

  
  static get(a, b, c) {
    return a - b - c;
  }

  set (a, b) {
    return a * b;
  }

  static set (a, b) {
    return a / b;
  }
}

assert(A.get(1, 2, 3) === -4);
assert(A.set(2, 1) === 2);

var a = new A;

assert(a.get(1, 2, 3) === 6);
assert(a.set(2, 2) === 4);
