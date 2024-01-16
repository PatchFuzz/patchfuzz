





Object.prototype[1] = 153;
Object.freeze(Object.prototype);

(function TestSloppyStoreToReadOnlyProperty() {
  function foo() {
    let ar = [];
    for (let i = 0; i < 3; i++) {
      ar[i] = 42;

      if (i == 1) {
        
        
        assertEquals(1, ar.length);
      } else {
        assertEquals(i + 1, ar.length);
      }
    }
    return ar;
  }

  assertEquals([42,153,42], foo());
  assertEquals([42,153,42], foo());
  assertEquals([42,153,42], foo());
  %PrepareFunctionForOptimization(foo);
  assertEquals([42,153,42], foo());
  %OptimizeFunctionOnNextCall(foo);
  assertEquals([42,153,42], foo());
})();

(function StrictStoreToReadOnlyProperty() {
  function foo() {
    "use strict";
    let ar = [];
    let threw_exception = false;
    for (let i = 0; i < 3; i++) {
      try {
        ar[i] = 42;
      } catch(e) {
        
        
        assertTrue(i == 1);
        assertEquals(1, ar.length);
        assertInstanceof(e, TypeError);
        threw_exception = true;
      }
    }
    assertTrue(threw_exception);
    return ar;
  }

  assertEquals([42,153,42], foo());
  assertEquals([42,153,42], foo());
  assertEquals([42,153,42], foo());
  %PrepareFunctionForOptimization(foo);
  assertEquals([42,153,42], foo());
  %OptimizeFunctionOnNextCall(foo);
  assertEquals([42,153,42], foo());
})();
