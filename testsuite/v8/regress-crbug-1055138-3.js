



Object.prototype[1] = 153;

(function StrictStoreToReadOnlyProperty() {
  function foo(prototype_frozen) {
    "use strict";
    let ar = [];
    let threw_exception = false;
    for (let i = 0; i < 3; i++) {
      try {
        ar[i] = 42;
      } catch(e) {
        if (prototype_frozen) {
          
          
          assertTrue(i == 1);
          assertEquals(1, ar.length);
          assertInstanceof(e, TypeError);
          threw_exception = true;
        }
      }
    }
    if (prototype_frozen) {
      assertTrue(threw_exception);
    }
    return ar;
  }

  
  assertEquals([42,42,42], foo(false));
  assertEquals([42,42,42], foo(false));
  assertEquals([42,42,42], foo(false));
  assertEquals([42,42,42], foo(false));
  Object.freeze(Object.prototype);
  
  assertEquals([42,153,42], foo());
})();
