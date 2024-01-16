













try {
  var A = class extends null { }
  new A;
  assert (false);
} catch (e) {
  assert (e instanceof TypeError);
}
