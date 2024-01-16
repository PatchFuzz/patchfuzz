



Object.prototype[1] = 153;

(function TestSloppyStoreToReadOnlyProperty() {
  function foo(prototype_frozen) {
    let ar = [];
    for (let i = 0; i < 3; i++) {
      ar[i] = 42;

      if (prototype_frozen) {
        if (i == 1) {
          
          
          assertEquals(1, ar.length);
        } else {
          assertEquals(i + 1, ar.length);
        }
      }
    }
    return ar;
  }

  
  assertEquals([42,42,42], foo(false));
  assertEquals([42,42,42], foo(false));
  assertEquals([42,42,42], foo(false));
  assertEquals([42,42,42], foo(false));
  Object.freeze(Object.prototype);
  
  assertEquals([42,153,42], foo(true));
})();
