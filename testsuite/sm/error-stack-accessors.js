

load(libdir + "asserts.js");



assertEq(typeof Object.create(Error()).stack, "string");
assertEq(Object.create(Error.prototype).stack, "");


{
  let myError = Object.create(Error());
  myError.stack = 5;
  assertEq(myError.stack, 5);

  let myOtherError = Object.create(Error.prototype);
  myOtherError.stack = 2;
  assertEq(myOtherError.stack, 2);
}


var obj = Object.create(null);
var desc = Object.getOwnPropertyDescriptor(Error.prototype, "stack");
Object.defineProperty(obj, "stack", desc);
assertThrowsInstanceOf(() => obj.stack, TypeError);


assertThrowsInstanceOf(desc.set,                TypeError);
assertThrowsInstanceOf(desc.set.bind("string"), TypeError);
assertThrowsInstanceOf(desc.get,                TypeError);
assertThrowsInstanceOf(desc.get.bind("string"), TypeError);
