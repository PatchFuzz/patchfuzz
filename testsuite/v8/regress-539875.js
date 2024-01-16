



(function testSeal() {
  var sloppy = arguments;
  var sym = Symbol();
  sloppy[sym] = 123;
  Object.seal(sloppy);
  assertTrue(Object.isSealed(sloppy));
  var desc = Object.getOwnPropertyDescriptor(sloppy, sym);
  assertEquals(123, desc.value);
  assertFalse(desc.configurable);
  assertTrue(desc.writable);
})();


(function testFreeze() {
  var sloppy = arguments;
  var sym = Symbol();
  sloppy[sym] = 123;
  Object.freeze(sloppy);
  assertTrue(Object.isFrozen(sloppy));
  var desc = Object.getOwnPropertyDescriptor(sloppy, sym);
  assertEquals(123, desc.value);
  assertFalse(desc.configurable);
  assertFalse(desc.writable);
})();


(function testIsFrozenAndIsSealed() {
  var sym = Symbol();
  var obj = { [sym]: 123 };
  Object.preventExtensions(obj);
  assertFalse(Object.isFrozen(obj));
  assertFalse(Object.isSealed(obj));
})();
