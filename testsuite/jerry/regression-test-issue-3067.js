















function f () { }

class B extends f {
  constructor () {
    super (0)
    super.$
    this.$ = $
  }
}

try {
  var b = new B;
  assert (false);
} catch (ex) {
  assert (ex instanceof ReferenceError);
}
