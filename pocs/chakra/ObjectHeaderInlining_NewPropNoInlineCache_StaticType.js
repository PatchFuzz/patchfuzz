Object.prototype.prop0 = -4;

function test0(arg) {
  var obj1 = {};
  obj0 = obj1;
  obj1.prop1 += 0;

  if (arg) {
    obj1.prop1 = obj1.prop1.prop0;
  } else {
    obj1.prop1 = obj0.prop0;
    obj0.prop0 = obj1;
  }
}
test0(true);
test0(true);
test0(true);
print("PASSED");