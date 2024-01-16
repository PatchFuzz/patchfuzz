













var mustBeCalled = false;

class C1 {
  f () {
    mustBeCalled = true;
    return function () {};
  }
}

class C2 extends C1 {
  f () {
    return class extends super.f() {}
  }
}

var c = new C2;
c.f ();

assert (mustBeCalled);
