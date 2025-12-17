function foo() {
  Object.defineProperty({}, undefined, { set: function () {} });
  obj = {};
  Object.defineProperty(obj, undefined, { get: function () {} });
  obj.x = 0;
  obj.y = 0;
  obj[Symbol.toStringTag] = "foo";
}
foo();
print('[object foo]', obj.toString());
foo();
print('[object foo]', obj.toString());
