

var calculatorMixin = Base => class extends Base {
  f () {
    return 1;
  }
};

var randomizerMixin = Base => class extends Base {
  g () {
    return 2;
  }
};

class A {
  constructor () { }
}

class B extends calculatorMixin (randomizerMixin (A)) {

}

var b = new B ();
assert (b.f () === 1)
assert (b.g () === 2);
