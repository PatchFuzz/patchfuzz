





load("./resources/v8-mjsunit.js", "caller relative");

let cleanup_call_count = 0;
let cleanup_holdings_count = 0;
let cleanup = function(holdings) {
  assertEquals(holdings, "holdings");

  
  
  
  let success = fg.unregister(key);

  assertTrue(success);

  ++cleanup_holdings_count;
  ++cleanup_call_count;
}

let fg = new FinalizationRegistry(cleanup);


let key = Symbol();

(function() {
    for (let i = 0; i < 1000; ++i) {
        let symbol = Symbol();
        let symbol2 = Symbol();
        fg.register(symbol, "holdings", key);
        fg.register(symbol2, "holdings", key);
    }
})();


gc();
assertEquals(0, cleanup_call_count);


let timeout_func = function() {
  assertEquals(1, cleanup_call_count);
  assertEquals(1, cleanup_holdings_count);
}

setTimeout(timeout_func, 0);
