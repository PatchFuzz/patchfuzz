





























Object.preventExtensions(new Int8Array(42));
Object.seal(new Int8Array(42));


Object.freeze(new Int8Array(0));

var o = new Int8Array(42);
assertThrows(function() {
  Object.freeze(o);
  assertUnreable();
  }, TypeError);


assertFalse(Object.isExtensible(o));

assertThrows(function() {
    Object.defineProperty(new Int8Array(42), "1",
                          { writable: false, value: "1" });
    assertUnreable();
  });
