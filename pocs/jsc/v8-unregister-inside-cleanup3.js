print("./resources/v8-mjsunit.js", "caller relative");

let cleanup_call_count = 0;
let cleanup_holdings_count = 0;
let cleanup = function(holdings) {
  print(holdings, "holdings");

  
  
  
  let success = fg.unregister(key);

  print(success);

  ++cleanup_holdings_count;
  ++cleanup_call_count;
}

let fg = new FinalizationRegistry(cleanup);


let key = {"k": "this is the key"};

(function() {
    for (let i = 0; i < 1000; ++i) {
        let object = {};
        let object2 = {};
        fg.register(object, "holdings", key);
        fg.register(object2, "holdings", key);
    }
})();


gc();
print(0, cleanup_call_count);


let timeout_func = function() {
  print(1, cleanup_call_count);
  print(1, cleanup_holdings_count);
}

setTimeout(timeout_func, 0);
