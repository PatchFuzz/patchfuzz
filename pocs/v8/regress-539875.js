(function testSeal() {
  var sloppy = arguments;
  var sym = Symbol();
  sloppy[sym] = 123;
  Object.seal(sloppy);
  print(Object.isSealed(sloppy));
  var desc = Object.getOwnPropertyDescriptor(sloppy, sym);
  print(123, desc.value);
  print(desc.configurable);
  print(desc.writable);
})();


(function testFreeze() {
  var sloppy = arguments;
  var sym = Symbol();
  sloppy[sym] = 123;
  Object.freeze(sloppy);
  print(Object.isFrozen(sloppy));
  var desc = Object.getOwnPropertyDescriptor(sloppy, sym);
  print(123, desc.value);
  print(desc.configurable);
  print(desc.writable);
})();


(function testIsFrozenAndIsSealed() {
  var sym = Symbol();
  var obj = { [sym]: 123 };
  Object.preventExtensions(obj);
  print(Object.isFrozen(obj));
  print(Object.isSealed(obj));
})();
