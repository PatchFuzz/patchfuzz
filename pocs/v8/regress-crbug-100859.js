function setx() {
  setx(typeof new Uint16Array('x') === 'object');
}
var exception = false;
try {
  setx();
} catch (ex) {
  print(ex instanceof RangeError);
  exception = true;
}
print(exception);
