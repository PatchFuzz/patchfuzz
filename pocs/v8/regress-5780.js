function testMutatedPrimitiveToStringTag(primitive) {
  Object.defineProperty(
    primitive.__proto__, Symbol.toStringTag,
    {value: "bogus", configurable: true, writable: false, enumerable: false});
  print("[object bogus]", Object.prototype.toString.call(primitive));
}

testMutatedPrimitiveToStringTag('');
testMutatedPrimitiveToStringTag(true);
testMutatedPrimitiveToStringTag(42);
testMutatedPrimitiveToStringTag(42.42);
testMutatedPrimitiveToStringTag(Symbol());
