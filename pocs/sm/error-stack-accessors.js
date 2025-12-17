;



print(typeof Object.create(Error()).stack, "string");
print(Object.create(Error.prototype).stack, "");


{
  let myError = Object.create(Error());
  myError.stack = 5;
  print(myError.stack, 5);

  let myOtherError = Object.create(Error.prototype);
  myOtherError.stack = 2;
  print(myOtherError.stack, 2);
}


var obj = Object.create(null);
var desc = Object.getOwnPropertyDescriptor(Error.prototype, "stack");
Object.defineProperty(obj, "stack", desc);
print(() => obj.stack, TypeError);


print(desc.set,                TypeError);
print(desc.set.bind("string"), TypeError);
print(desc.get,                TypeError);
print(desc.get.bind("string"), TypeError);
