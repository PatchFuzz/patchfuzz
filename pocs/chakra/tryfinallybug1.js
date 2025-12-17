function test0() {
  var b = -162;
  try {
    try {
    } catch (ex) {
    } finally {
      ((b = -1006389207) * c);
    }
  } catch (ex) {
  } finally {
  }
  return b;
}

var b = test0();
b |= test0();
b |= test0();

if (b == -1006389207) {
  print("PASSED");
}

