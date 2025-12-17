function test() {
  "use strict";

  const g = newGlobal({newCompartment: true});
  Error.prototype.whence = "main global";
  g.eval("Error.prototype.whence = 'other global'");

  const obj = g.eval("[]");
  Object.freeze(obj);
  try {
    obj.foo = 7;
    print("reached", "no", "This line should not be reached; the previous line should have thrown");
  } catch(e) {
    print("" + e, `TypeError: can't define property "foo": Array is not extensible`);
    print(e.whence, "main global"); 
  }

  const obj2 = g.eval(`obj2 = { get x() { throw new Error("go away"); } };`);
  try {
    obj2.x;
    print("reached", "no", "This line should not be reached; the previous line should have thrown");
  } catch(e) {
    print("" + e, `Error: go away`);
    print(e.whence, "other global"); 
  }
}

test();
