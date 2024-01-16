













try {
  var v0 = Object.freeze (RegExp ("foo", "g")).compile ();
  assert(false);
} catch (e) {
  assert(e instanceof TypeError);
}
