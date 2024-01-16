var acc = 0;
const loopCount = 100;

class A {
  #x = 1;
  static loopRead(o) {
    for (var i = 0; i < loopCount; i++) {
      
      
      
      var b = o.#x;
      acc += 1;
    }
  }
};





var array = [new A, new A, new A, {}, {}];
for (var e of array) {
  acc = 0;
  try {
    A.loopRead(e);
    assertEq(acc, loopCount);
  } catch (e) {
    assertEq(e instanceof TypeError, true);
    assertEq(acc, 0);
  }
}
