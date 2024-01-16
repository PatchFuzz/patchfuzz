





load("./resources/v8-mjsunit.js", "caller relative");

let cleanup_call_count = 0;
let cleanup = function(holdings) {
  assertEquals("holdings", holdings);
  ++cleanup_call_count;
}

let fg = new FinalizationRegistry(cleanup);
let key = {"k": "this is the key"};



(function() {
    for (let i = 0; i < 1000; ++i) {
        let object = {};
        fg.register(object, "holdings", key);
    }
})();


gc();
assertEquals(0, cleanup_call_count);


let timeout_func = function() {
    assertNotEquals(0, cleanup_call_count);
    let old_cleanup_call_count = cleanup_call_count;

    
    let success = fg.unregister(key);
    
    

    
    setTimeout(() => { assertEquals(old_cleanup_call_count, cleanup_call_count); }, 0);
}

setTimeout(timeout_func, 0);
