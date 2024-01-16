













class JSEtest {
  set #m(v) {
    this._v = v;
  }

  method() {
    let self = !this;
    self.#m = 'Test262';
  }
}

let c = new JSEtest();

try {
  c.method();
  assert(false);
} catch (e) {
  assert(e instanceof TypeError);
}
