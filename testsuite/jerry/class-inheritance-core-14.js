

class A {
  constructor () {
    this.a = 5;
  }

  f () {
    return 10;
  }

  super () {
    this.super = 10;
    return 15;
  }
}

class B extends A {
  constructor () {
    super ();
    assert (super.f === A.prototype.f);
    super.f = 8;
    assert (this.f === 8);
    assert (super.f === A.prototype.f);

    assert (this.a === 5);
    super.a = 10;
    assert (this.a === 10);

    assert (super.super () === 15);
    assert (this.super === 10);
    super.super = 20;
    assert (this.super === 20);
    assert (super.super () === 15);
  }
}

var b = new B;
assert (b.f === 8);
assert (b.a === 10);
