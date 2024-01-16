













class A {
  constructor() {
    this.id = 50000;
  }

  getid(a) {
    if (typeof a === 'number') {
      this.id += a;
    }
    return this.id;
  }
}

class B extends A {
  constructor() {
    super();
    this.id = 100;
  }

  getid_A() {
    return super.getid.call(this);
  }

  getid_B(a) {
    return super.getid.call(this, a);
  }
  getid_C(a) {
    var fn = super.getid.bind(this);
    return fn(a);
  }
}

var obj = new B();

assert (obj.getid_A() === 100);
assert (obj.getid_B(1) === 101);
assert (obj.getid_C(1) === 102);
assert (obj.id === 102);
