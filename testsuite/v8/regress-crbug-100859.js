



























function setx() {
  setx(typeof new Uint16Array('x') === 'object');
}
var exception = false;
try {
  setx();
} catch (ex) {
  assertTrue(ex instanceof RangeError);
  exception = true;
}
assertTrue(exception);
