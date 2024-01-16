





load("./resources/v8-mjsunit.js", "caller relative");

let cleanup_call_count = 0;
let cleanup_holdings_count = 0;
let cleanup = function(holdings) {
  assertEquals("holdings2", holdings);
  ++cleanup_holdings_count;
  ++cleanup_call_count;
}

let fg = new FinalizationRegistry(cleanup);
let key1 = Symbol();
let key2 = Symbol();



(function() {
    for (let i = 0; i < 1000; ++i) {
        let symbol1a = Symbol();
        fg.register(symbol1a, "holdings1a", key1);

        let symbol1b = Symbol();
        fg.register(symbol1b, "holdings1b", key1);

        let symbol2 = Symbol();
        fg.register(symbol2, "holdings2", key2);

        
        let success = fg.unregister(key1);
        assertTrue(success);
    }
})();


gc();
assertEquals(0, cleanup_call_count);



let timeout_func = function() {
  assertNotEquals(0, cleanup_call_count);
  assertNotEquals(0, cleanup_holdings_count);
}

setTimeout(timeout_func, 0);
