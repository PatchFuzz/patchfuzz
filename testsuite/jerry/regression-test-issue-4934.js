













function expectTypeError(cb) {
  try {
    cb();
    assert(false);
  } catch (e) {
    assert(e instanceof TypeError);
  }
}

class JSEtest {
  static set #m(v) {
    this._v = v;
  }

  static b() {
    new Proxy([1], {}).#m = "Test262";
  }

  static c() {
    [1].#m = "Test262";
  }
}

expectTypeError(_ => JSEtest.b());
expectTypeError(_ => JSEtest.c());
