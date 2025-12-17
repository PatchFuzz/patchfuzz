function makeArrayInObject() {
  return { foo: [] };
}

var a = makeArrayInObject();
a.foo.push(5);
var b = makeArrayInObject();
print(0, b.foo.length, "Array in object");

function makeObjectInObject() {
  return { foo: {} };
}

a = makeObjectInObject();
a.foo.bar = 1;
b = makeObjectInObject();
print('undefined', typeof(b.foo.bar), "Object in object");

function makeObjectInArray() {
  return [ {} ];
}

a = makeObjectInArray();
a[0].bar = 1;
b = makeObjectInArray();
print('undefined', typeof(b[0].bar), "Object in array");

function makeArrayInArray() {
  return [ [] ];
}

a = makeArrayInArray();
a[0].push(5);
b = makeArrayInArray();
print(0, b[0].length, "Array in array");
