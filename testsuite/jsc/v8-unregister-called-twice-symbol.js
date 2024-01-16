





load("./resources/v8-mjsunit.js", "caller relative");

let cleanup_call_count = 0;
let cleanup = function(holdings) {
  ++cleanup_call_count;
}

let fg = new FinalizationRegistry(cleanup);
let key = Symbol();



(function() {
  let symbol = Symbol();
  fg.register(symbol, "holdings", key);

  
  let success = fg.unregister(key);
  assertTrue(success);

  
  success = fg.unregister(key);
  assertFalse(success);

  
})();


gc();
assertEquals(0, cleanup_call_count);



let timeout_func = function() {
  assertEquals(0, cleanup_call_count);
}

setTimeout(timeout_func, 0);
