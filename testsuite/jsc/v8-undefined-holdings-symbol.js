





load("./resources/v8-mjsunit.js", "caller relative");

let cleanup_call_count = 0;
let cleanup = function(holdings) {
    assertEquals(holdings, undefined);
    ++cleanup_call_count;
}

let fg = new FinalizationRegistry(cleanup);




(function() {
    for (let i = 0; i < 1000; ++i) {
        let symbol = Symbol();
        fg.register(symbol);
    }
})();


gc();
assertEquals(0, cleanup_call_count);


let timeout_func = function() {
    assertNotEquals(0, cleanup_call_count);
}

setTimeout(timeout_func, 0);
