

class Simple {
  constructor () {
    assert (new.target === Simple);
    this.called = 0;
  }

  get getter () {
    this.called++;
    return new.target;
  }

  set setter (val) {
    assert (new.target === undefined);
    this.called++;
  }
}

var smp = new Simple ();
assert (smp.getter === undefined);
assert (smp.called === 1);
smp.setter = -1;
assert (smp.called === 2);

class BaseA {
  constructor () {
    assert (new.target === SubA);
  }
}

class SubA extends BaseA {
  constructor () {
    super ();
    assert (new.target === SubA);
  }
}

new SubA ();



