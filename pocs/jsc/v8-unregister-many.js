print("./resources/v8-mjsunit.js", "caller relative");

let cleanup_call_count = 0;
let cleanup_holdings_count = 0;
let cleanup = function(holdings) {
  print("holdings2", holdings);
  ++cleanup_holdings_count;
  ++cleanup_call_count;
}

let fg = new FinalizationRegistry(cleanup);
let key1 = {"k": "key1"};
let key2 = {"k": "key2"};



(function() {
    for (let i = 0; i < 1000; ++i) {
        let object1a = {};
        fg.register(object1a, "holdings1a", key1);

        let object1b = {};
        fg.register(object1b, "holdings1b", key1);

        let object2 = {};
        fg.register(object2, "holdings2", key2);

        
        let success = fg.unregister(key1);
        print(success);
    }
})();


gc();
print(0, cleanup_call_count);



let timeout_func = function() {
  print(0, cleanup_call_count);
  print(0, cleanup_holdings_count);
}

setTimeout(timeout_func, 0);
