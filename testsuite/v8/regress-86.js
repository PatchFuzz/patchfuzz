


























var aList = [1, 2, 3];
var loopCount = 0;
var leftThroughFinally = false;
var enteredFinally = false;
for (x in aList) {
  leftThroughFinally = true;
  try {
    throw "ex1";
  } catch(er1) {
    loopCount += 1;
  } finally {
    enteredFinally = true;
    continue;
  }
  leftThroughFinally = false;
}
assertEquals(3, loopCount);
assertTrue(enteredFinally);
assertTrue(leftThroughFinally);
